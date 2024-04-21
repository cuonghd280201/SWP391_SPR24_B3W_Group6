import React, { useState } from "react";
import { Layout } from "antd";
import { Editor } from "@tinymce/tinymce-react";

const Step1Form = ({ onButtonClick, name, starLocation, endLocation, description, price, city }) => {
    // State variables for form inputs
    const [formData, setFormData] = useState({
        name: name || "",
        starLocation: starLocation || "",
        endLocation: endLocation || "",
        description: description || "",
        price: price || "",
        city: city || "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [selectedImages, setSelectedImages] = useState([]);

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle image file selection
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);
    };

    // Validate form
    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Vui lòng nhập tên tour.";
        }
        if (!formData.starLocation) {
            errors.starLocation = "Vui lòng nhập địa điểm bắt đầu.";
        }
        if (!formData.endLocation) {
            errors.endLocation = "Vui lòng nhập địa điểm kết thúc.";
        }
        if (!formData.price) {
            errors.price = "Vui lòng nhập giá.";
        } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
            errors.price = "Giá phải là số và lớn hơn 0.";
        }
        if (!formData.city) {
            errors.city = "Vui lòng nhập thành phố.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = () => {
        if (validateForm()) {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("starLocation", formData.starLocation);
            formDataToSend.append("endLocation", formData.endLocation);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("price", formData.price);
            formDataToSend.append("city", formData.city);
            selectedImages.forEach((file, index) => {
                formDataToSend.append(`image${index}`, file);
            });

            // Call the onButtonClick function and pass the current form data
            onButtonClick("step2form", formDataToSend);
        }
    };

    return (
        <Layout style={{ padding: "20px" }}>
            <h4>Step 1: Tour Information</h4>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Tour Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formErrors.name && (
                            <p style={{ color: 'red' }}>{formErrors.name}</p>
                        )}
                    </div>
                </div>
                <div class="col-md-6">
                    <div className="form-group">
                        <label htmlFor="location">Start Location:</label>
                        <input
                            type="text"
                            id="starLocation"
                            className="form-control"
                            value={formData.starLocation}
                            onChange={handleChange}
                        />
                        {formErrors.starLocation && (
                            <p style={{ color: 'red' }}>{formErrors.starLocation}</p>
                        )}
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="form-group">
                        <label htmlFor="location">End Location:</label>
                        <input
                            type="text"
                            id="endLocation"
                            className="form-control"
                            value={formData.endLocation}
                            onChange={handleChange}
                        />
                        {formErrors.endLocation && (
                            <p style={{ color: 'red' }}>{formErrors.endLocation}</p>
                        )}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            className="form-control"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        {formErrors.price && (
                            <p style={{ color: 'red' }}>{formErrors.price}</p>
                        )}
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            className="form-control"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {formErrors.city && (
                            <p style={{ color: 'red' }}>{formErrors.city}</p>
                        )}
                    </div>
                </div>

                <div class="col-md-6">
                    <div className="form-group">
                        <label htmlFor="imageUpload">Choose Images:</label>
                        <input
                            type="file"
                            id="imageUpload"
                            className="form-control"
                            multiple
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>

                <div class="row">
                    <div className="col-md-24">
                        <div className="form-group app-label mt-2">
                            <label className="text-muted">Mô tả chuyến đi</label>
                            <Editor
                                className="fix-height"
                                id="description"
                                apiKey="axy85kauuja11vgbfrm96qlmduhgfg6egrjpbjil00dfqpwf"
                                initialValue={formData.description}
                                onEditorChange={(content) => {
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        description: content,
                                    }));
                                }}
                            />
                            {formErrors.description && (
                                <p style={{ color: 'red' }}>{formErrors.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 mt-2 d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-primary" value={formData.someField || ''} onChange={handleChange} onClick={handleSubmit}>
                    Continue
                </button>
            </div>


        </Layout>
    );
};

export default Step1Form;
