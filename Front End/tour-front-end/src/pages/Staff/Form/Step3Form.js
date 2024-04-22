import React from 'react';
import { Form, Input, Button } from 'antd';

const Step3Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        onNext(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.Item
                label="Time"
                name="time"
                rules={[{ required: true, message: 'Please enter the time!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Vehicle"
                name="vehicle"
                rules={[{ required: true, message: 'Please enter the vehicle!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true, message: 'Please enter the location!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Food"
                name="food"
                rules={[{ required: true, message: 'Please enter the food!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Hotel"
                name="hotel"
                rules={[{ required: true, message: 'Please enter the hotel!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Next</Button>
            </Form.Item>
        </Form>
    );
};

export default Step3Form;
