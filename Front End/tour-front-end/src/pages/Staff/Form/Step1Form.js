import React from 'react';
import { Form, Input, Button } from 'antd';

const Step1Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        onNext(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Start Location" name="startLocation" rules={[{ required: true, message: 'Please enter the start location!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="End Location" name="endLocation" rules={[{ required: true, message: 'Please enter the end location!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter the description!' }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter the price!' }]}>
                <Input type="number" />
            </Form.Item>
            <Form.Item label="Cover Image" name="coverImage" rules={[{ required: true, message: 'Please enter the cover image URL!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter the city!' }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Next</Button>
            </Form.Item>
        </Form>
    );
};

export default Step1Form;
