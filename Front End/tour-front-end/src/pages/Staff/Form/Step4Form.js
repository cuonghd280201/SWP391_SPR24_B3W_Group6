import React from 'react';
import { Form, Button, Input, Space, DatePicker } from 'antd';
import moment from 'moment';

const Step4Form = ({ formData, onNext }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        // Định dạng các giá trị ngày tháng trong values
        const formattedValues = values.tourTimeCreateFormSet.map((item) => {
            return {
                ...item,
                startDate: item.startDate.format('DD-MM-YYYY'),
                endDate: item.endDate.format('DD-MM-YYYY'),
            };
        });

        // Gọi onNext với giá trị đã định dạng
        onNext({ tourTimeCreateFormSet: formattedValues });
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={formData}>
            <Form.List name="tourTimeCreateFormSet">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'startDate']}
                                    fieldKey={[fieldKey, 'startDate']}
                                    rules={[{ required: true, message: 'Please enter the start date!' }]}
                                >
                                    <DatePicker placeholder="Start Date" format="DD-MM-YYYY" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'endDate']}
                                    fieldKey={[fieldKey, 'endDate']}
                                    rules={[{ required: true, message: 'Please enter the end date!' }]}
                                >
                                    <DatePicker placeholder="End Date" format="DD-MM-YYYY" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'startTime']}
                                    fieldKey={[fieldKey, 'startTime']}
                                    rules={[{ required: true, message: 'Please enter the start time!' }]}
                                >
                                    <Input placeholder="Start Time (HH:MM)" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'slotNumber']}
                                    fieldKey={[fieldKey, 'slotNumber']}
                                    rules={[{ required: true, message: 'Please enter the slot number!' }]}
                                >
                                    <Input placeholder="Slot Number" type="number" />
                                </Form.Item>
                                <Button type="link" onClick={() => remove(name)}>Remove</Button>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon="+">
                                Add Time
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

export default Step4Form;
