import React from 'react';
import { Form, Button, Input } from 'antd';

const Step6Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        onNext(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.Item
                label="Confirmation"
                name="submitHere"
                rules={[{ required: true, message: 'Please confirm by typing "submit"' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit Tour</Button>
            </Form.Item>
        </Form>
    );
};

export default Step6Form;
