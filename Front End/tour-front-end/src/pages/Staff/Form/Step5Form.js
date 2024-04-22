import React, { useState } from 'react';
import { Form, Button, Space } from 'antd';
import FileUploadImage from '../../Profile/FileUploadImage';

const Step5Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    // Initialize the uploaded images state with the initial values from formData
    const [uploadedImages, setUploadedImages] = useState(formData.tourImageCreateForms || []);

    // Function to handle image upload and update the form field
    const handleImageUpload = (url, index) => {
        // Create a copy of the uploaded images array
        const updatedImages = [...uploadedImages];
        // Update the image at the given index
        updatedImages[index] = { image: url };
        // Update the state
        setUploadedImages(updatedImages);
        // Update the form fields value
        form.setFieldsValue({ tourImageCreateForms: updatedImages });
    };

    // Function to handle form submission
    const handleSubmit = (values) => {
        // Include the updated images in the form values
        values.tourImageCreateForms = uploadedImages;
        onNext(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            {/* Form.List to handle multiple image inputs */}
            <Form.List name="tourImageCreateForms">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'image']}
                                    fieldKey={[fieldKey, 'image']}
                                    rules={[{ required: true, message: 'Please upload the image!' }]}
                                >
                                    {/* Pass the handleImageUpload function to FileUploadImage */}
                                    <FileUploadImage
                                        setUploadedImageUrl={(url) => handleImageUpload(url, index)}
                                    />
                                </Form.Item>
                                {/* Remove button for each form list item */}
                                <Button type="link" onClick={() => remove(name)}>Remove</Button>
                            </Space>
                        ))}
                        {/* Button to add new image */}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block>
                                Add Image
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            {/* Submit button */}
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default Step5Form;
