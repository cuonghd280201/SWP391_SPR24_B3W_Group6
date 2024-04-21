import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Editor } from "@tinymce/tinymce-react";

const { Content } = Layout;

const Step4Form = ({ onButtonClick, startTime, endTime, description, slotNumber }) => {
    // State variables to manage form values
    const [formData, setFormData] = useState({
        startTime: startTime || "",
        endTime: endTime || "",
        description: description || "",
        slotNumber: slotNumber || "",
    });

    // State variable for form errors
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        setFormData({
            startTime: startTime || "",
            endTime: endTime || "",
            description: description || "",
            slotNumber: slotNumber || "",
        });
    }, [startTime, endTime, description, slotNumber]);

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Validate form
    const validateForm = () => {
        const errors = {};
        if (!formData.startTime) {
            errors.startTime = "Vui lòng chọn thời gian xuất phát.";
        }
        if (!formData.endTime) {
            errors.endTime = "Vui lòng chọn thời gian kết thúc.";
        }
        if (!formData.description) {
            errors.description = "Vui lòng nhập mô tả.";
        }
        if (!formData.slotNumber) {
            errors.slotNumber = "Vui lòng nhập số lượng hành khách.";
        } else if (formData.slotNumber < 2) {
            errors.slotNumber = "Số lượng hành khách phải từ 2 trở lên.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = () => {
        if (validateForm()) {
            // Call the onSubmit function with the form data
            onButtonClick("step5form", formData);
        }
    };

    return (
        <Layout>
            <div
                style={{
                    padding: "30px",
                    background: "white",
                    margin: "30px",
                    borderRadius: "12px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
            >
                <Content>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="rounded shadow bg-white p-4">
                                <div className="custom-form">
                                    <h4 className="text-dark mb-3">Tạo thời gian cho chuyến đi</h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group app-label mt-2">
                                                <label className="text-muted">Thời gian xuất phát</label>
                                                <input
                                                    id="startTime"
                                                    type="date"
                                                    className="form-control resume"
                                                    value={formData.startTime}
                                                    onChange={handleChange}
                                                />
                                                {formErrors.startTime && (
                                                    <p style={{ color: 'red' }}>{formErrors.startTime}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group app-label mt-2">
                                                <label className="text-muted">Thời gian kết thúc</label>
                                                <input
                                                    id="endTime"
                                                    type="date"
                                                    className="form-control resume"
                                                    value={formData.endTime}
                                                    onChange={handleChange}
                                                />
                                                {formErrors.endTime && (
                                                    <p style={{ color: 'red' }}>{formErrors.endTime}</p>
                                                )}
                                            </div>
                                        </div>

                                        

                                        <div className="col-md-6">
                                            <div className="form-group app-label mt-2">
                                                <label className="text-muted">Số hành khách</label>
                                                <input
                                                    id="slotNumber"
                                                    type="number"
                                                    className="form-control resume"
                                                    value={formData.slotNumber}
                                                    onChange={handleChange}
                                                    min="2"
                                                />
                                                {formErrors.slotNumber && (
                                                    <p style={{ color: 'red' }}>{formErrors.slotNumber}</p>
                                                )}
                                            </div>
                                        </div>

                                        
                                    </div>
                                    <div className="col-md-24">
                                            <div className="form-group app-label mt-2">
                                                <label className="text-muted">Mô tả</label>
                                                <Editor
                                                    id="description"
                                                    initialValue={formData.description}
                                                    init={{
                                                        height: 200,
                                                        menubar: false,
                                                        plugins: "link image",
                                                        toolbar:
                                                            "undo redo | bold italic | alignleft aligncenter alignright | code",
                                                    }}
                                                    onEditorChange={(content) => {
                                                        setFormData((prevData) => ({
                                                            ...prevData,
                                                            description: content,
                                                        }));
                                                    }}
                                                />
                                                {formErrors.description && (
                                                    <p style={{ color: 'red' }}>{formErrors.description}</p>
                                                )}
                                            </div>
                                        </div>

                                    <div className="col-lg-12 mt-2 d-flex justify-content-end gap-2">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        </Layout>
    );
};

export default Step4Form;
