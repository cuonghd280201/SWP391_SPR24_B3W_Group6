import React, { useState } from 'react';
import { Form, Button, Space, Layout } from 'antd';
import FileUploadImage from '../Profile/FileUploadImage';
import SiderBarWebStaff from './SlideBar/SiderBarWebStaff';
import NavBarWebStaff from './Navbar/NavBarWebStaff';
const ManageBanner = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    const [uploadedImages, setUploadedImages] = useState(null);

    const handleImageUpload = (url, index) => {
        const updatedImages = [...uploadedImages];
        updatedImages[index] = { image: url };
        setUploadedImages(updatedImages);
    };

    const [imageUrl, setImageUrl] = useState('');


    return (
        <Layout style={{ minHeight: "100vh" }}>
            <SiderBarWebStaff choose={"menu-key/1"} />
            <Layout>
                <NavBarWebStaff />
                <div
                    style={{
                        padding: "30px",
                        background: "white",
                        margin: "30px",
                        borderRadius: "12px",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                >
                    <h2>Thêm Ảnh Minh Họa</h2>
                    <Form form={form} layout="vertical">
                        <Form.List name="">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'image']}
                                                fieldKey={[fieldKey, 'image']}
                                                rules={[{ required: true, message: 'Vui Lòng Nhập Ảnh Phụ!' }]}
                                            >
                                                <FileUploadImage
                                                    setUploadedImageUrl={(url) => handleImageUpload(url, index)}
                                                />
                                            </Form.Item>
                                            <Button type="link" onClick={() => remove(name)}>Xóa</Button>
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block>
                                            Thêm Ảnh Khác
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form>

                    <form >
                        <div>
                            <label>URL hình ảnh:</label>
                            <input type="text" value={imageUrl} required />
                        </div>
                    </form>
                </div>

            </Layout>
        </Layout>
    );
};

export default ManageBanner;
