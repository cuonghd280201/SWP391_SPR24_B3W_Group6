import React from 'react';
import { Form, Button, Input, Space } from 'antd';

const Step5Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        onNext(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.List name="tourImageCreateForms">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'image']}
                                    fieldKey={[fieldKey, 'image']}
                                    rules={[{ required: true, message: 'Please enter the image URL!' }]}
                                >
                                    <Input placeholder="Image URL" />
                                </Form.Item>
                                <Button type="link" onClick={() => remove(name)}>Remove</Button>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon="+">
                                Add Image
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">Next</Button>
            </Form.Item>
        </Form>
    );
};

export default Step5Form;
