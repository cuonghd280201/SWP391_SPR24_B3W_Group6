import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import FileUploadImage from '../../Profile/FileUploadImage';

const Step1Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();
    const [uploadedImageUrl, setUploadedImageUrl] = useState(formData.coverImage);

    const handleSubmit = (values) => {
        values.coverImage = uploadedImageUrl;
        onNext(values);
    };

    const handleImageUpload = (url) => {
        setUploadedImageUrl(url);
        form.setFieldsValue({ coverImage: url });
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please enter the title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Start Location"
                name="starLocation"
                rules={[{ required: true, message: 'Please enter the start location!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="End Location"
                name="endLocation"
                rules={[{ required: true, message: 'Please enter the end location!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please enter the description!' }]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Please enter the price!' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                label="Cover Image"
                name="coverImage"
                rules={[{ required: true, message: 'Please upload the cover image!' }]}
            >
                {/* Pass the function to set the uploaded image URL */}
                <FileUploadImage setUploadedImageUrl={handleImageUpload} />
            </Form.Item>
            <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: 'Please enter the city!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Next</Button>
            </Form.Item>
        </Form>
    );
};

export default Step1Form;
