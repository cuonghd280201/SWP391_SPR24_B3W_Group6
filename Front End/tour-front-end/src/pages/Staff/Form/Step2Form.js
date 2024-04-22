import React from 'react';
import { Form, Button, Input, Space } from 'antd';

const Step2Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        onNext(values);
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.List name="listTourSchedule">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'day']}
                                    fieldKey={[fieldKey, 'day']}
                                    rules={[{ required: true, message: 'Please enter the day!' }]}
                                >
                                    <Input placeholder="Day" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'title']}
                                    fieldKey={[fieldKey, 'title']}
                                    rules={[{ required: true, message: 'Please enter the title!' }]}
                                >
                                    <Input placeholder="Title" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'description']}
                                    fieldKey={[fieldKey, 'description']}
                                    rules={[{ required: true, message: 'Please enter the description!' }]}
                                >
                                    <Input placeholder="Description" />
                                </Form.Item>
                                <Button type="link" onClick={() => remove(name)}>Remove</Button>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon="+">
                                Add Schedule
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

export default Step2Form;
