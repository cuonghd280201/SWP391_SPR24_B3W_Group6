import React, { useState } from 'react';
import { Form, Input, Button, Layout } from 'antd';
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
        <Layout>
                <h2>Tạo Thông Tin Chính Của Chuyến Đi</h2>
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.Item
                label="Tiêu đề"
                name="title"
                rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Nơi bắt đầu"
                name="starLocation"
                rules={[{ required: true, message: 'Vui lòng nhập nơi bắt đầu!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Nơi Kết Thúc"
                name="endLocation"
                rules={[{ required: true, message: 'Vui lòng nhập nơi kết thúc!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Mô tả"
                name="description"
                rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                label="Giá"
                name="price"
                rules={[{ required: true, message: 'Vui lòng nhập giá!' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                label="Ảnh Chính"
                name="coverImage"
                rules={[{ required: true, message: 'Vui Lòng nhập ảnh chính!' }]}
            >
                {/* Pass the function to set the uploaded image URL */}
                <FileUploadImage setUploadedImageUrl={handleImageUpload} />
            </Form.Item>
            <Form.Item
                label="Thành Phố"
                name="city"
                rules={[{ required: true, message: 'Vui Lòng Nhập Thành Phố!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Bước Tiếp Theo</Button>
            </Form.Item>
        </Form>
        </Layout>
    );
};

export default Step1Form;
