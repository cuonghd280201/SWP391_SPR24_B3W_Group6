import React, { useState } from "react";
import { Layout, Button } from "antd";
import tourServices from "../../../services/tour.services";

const { Content } = Layout;

const Step5Form = ({ formData = {}, onTourCreated }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    // Handle image file selection
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        // Create a FormData object and append the data from all previous steps
        const combinedFormData = new FormData();

        // Add data from the formData prop
        if (formData) {
            for (const [key, value] of Object.entries(formData)) {
                combinedFormData.append(key, value);
            }
        }

        // Append selected images to the form data
        selectedImages.forEach((file, index) => {
            combinedFormData.append(`image${index}`, file);
        });

        try {
            // Call the API endpoint to create the tour
            const response = await tourServices.createTour(combinedFormData);

            // Handle successful tour creation
            if (response.ok) {
                // Notify parent component that the tour has been created
                onTourCreated();
            } else {
                console.error("Failed to create tour:", await response.text());
            }
        } catch (error) {
            console.error("Error creating tour:", error);
        }
    };

    return (
        <Layout style={{ padding: "20px" }}>
            <h4>Step 5: Upload Images</h4>
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
            <Button  type="primary" onClick={handleSubmit}>
                Submit Tour
            </Button>
        </Layout>
    );
};

export default Step5Form;
