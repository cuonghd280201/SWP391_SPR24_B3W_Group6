import React, { useState , useEffect} from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Step3Form = ({ onButtonClick, days, title, description }) => {
    // State variables to manage form values

    const [formData, setFormData] = useState({
      days: days || '',
      title: title || '',
      description: description || '',
      
  });


    // State variable for form errors
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
      setFormData({
        days: days || '',
        title: title || '',
        description: description || '',
         
      });
  }, [days, title, description]);

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
        if (!formData.days) {
            errors.days = "Enter number of days";
        }
        if (!formData.title) {
            errors.title = "Enter title";
        }
        if (!formData.description) {
            errors.description = "Enter description";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = () => {
        if (validateForm()) {
            // Call the onSubmit function with the form data
            onButtonClick("step4form", formData);
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
                                    <div id="message3"></div>
                                    <h4 className="text-dark mb-3">Tạo lịch chuyến đi</h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group app-label mt-2">
                                                <label className="text-muted">Số lượng ngày</label>
                                                <input
                                                    id="days"
                                                    type="number"
                                                    className="form-control resume"
                                                    placeholder="1"
                                                    min="1"
                                                    max="10"
                                                    value={formData.days}
                                                    onChange={handleChange}
                                                />
                                                {formErrors.days && <p style={{ color: 'red' }}>{formErrors.days}</p>}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group app-label mt-2">
                                                <label className="text-muted">Tiêu đề</label>
                                                <input
                                                    id="title"
                                                    type="text"
                                                    className="form-control resume"
                                                    maxLength="100"
                                                    required
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                />
                                                {formErrors.title && <p style={{ color: 'red' }}>{formErrors.title}</p>}
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group app-label mt-2">
                                                <label className="text-muted">Mô tả</label>
                                                <input
                                                    id="description"
                                                    type="text"
                                                    className="form-control resume"
                                                    maxLength="100"
                                                    required
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                />
                                                {formErrors.description && <p style={{ color: 'red' }}>{formErrors.description}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-2 d-flex justify-content-end gap-2">
                                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
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

export default Step3Form;
