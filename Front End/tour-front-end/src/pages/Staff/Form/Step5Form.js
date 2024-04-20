import React, { useState } from "react";
import { Layout, Button } from "antd";
import tourServices from "../../../services/tour.services";

const { Content } = Layout;

const Step5Form = ({ combinedData, onTourCreated }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    // Handle image file selection
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);
    };

    // Function to create a tour
    const createTour = async () => {
        // Add image data to the combined form data
        const formData = new FormData();
        formData.append("title", combinedData.title);
        formData.append("startLocation", combinedData.startLocation);
        formData.append("endLocation", combinedData.endLocation);
        formData.append("description", combinedData.description);
        formData.append("price", combinedData.price);
        formData.append("city", combinedData.city);

        // Add tour details
        formData.append("time", combinedData.tourDetailCreateForm.time);
        formData.append("vehicle", combinedData.tourDetailCreateForm.vehicle);
        formData.append("location", combinedData.tourDetailCreateForm.location);
        formData.append("food", combinedData.tourDetailCreateForm.food);
        formData.append("hotel", combinedData.tourDetailCreateForm.hotel);

        // Add tour schedule
        combinedData.listTourSchedule.forEach((schedule, index) => {
            formData.append(`listTourSchedule[${index}].day`, schedule.day);
            formData.append(`listTourSchedule[${index}].title`, schedule.title);
            formData.append(`listTourSchedule[${index}].description`, schedule.description);
        });

        // Add tour times
        combinedData.tourTimeCreateFormSet.forEach((time, index) => {
            formData.append(`tourTimeCreateFormSet[${index}].startDate`, time.startDate);
            formData.append(`tourTimeCreateFormSet[${index}].endDate`, time.endDate);
            formData.append(`tourTimeCreateFormSet[${index}].startTime`, time.startTime);
            formData.append(`tourTimeCreateFormSet[${index}].slotNumber`, time.slotNumber);
        });

        // Add selected images
        selectedImages.forEach((image, index) => {
            formData.append(`tourImageCreateForms[${index}].image`, image);
        });

        // Send the form data to the API endpoint
        try {
          const response = tourServices.createTour(formData);
            if (response.ok) {
                // Notify the parent component or navigate to a different route
                onTourCreated();
            } else {
                console.error("Failed to create tour:", await response.text());
            }
        } catch (error) {
            console.error("Error creating tour:", error);
        }
    };

    return (
        <Layout>
            <div
                style={{
                    padding: "30px",
                    background: "white",
                    margin: "30px",
                    borderRadius: "12px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
            >
                <Content>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="rounded shadow bg-white p-4">
                                <div className="custom-form">
                                    <h4 className="text-dark mb-3">Tạo ảnh cho chuyến đi</h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="imageUpload" className="form-label">
                                                Chọn ảnh:
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="imageUpload"
                                                name="imageUpload"
                                                multiple
                                                onChange={handleImageUpload}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-2 d-flex justify-content-end gap-2">
                                        <Button type="primary" onClick={createTour}>
                                            Tạo chuyến đi
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        </Layout>
    );
};

export default Step5Form;
