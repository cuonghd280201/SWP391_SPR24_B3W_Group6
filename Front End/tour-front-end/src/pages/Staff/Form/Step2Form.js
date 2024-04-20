import React, { useEffect, useState } from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Step2Form = ({ onButtonClick, time, vehicle, location, food, hotel }) => {
    const [formData, setFormData] = useState({
        time: time || '',
        vehicle: vehicle || '',
        location: location || '',
        food: food || '',
        hotel: hotel || '',
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        setFormData({
            time: time || '',
            vehicle: vehicle || '',
            location: location || '',
            food: food || '',
            hotel: hotel || '',
        });
    }, [time, vehicle, location, food, hotel]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const validateForm = () => {
        const errors = {};
        const requiredFields = ['time', 'vehicle', 'location', 'food', 'hotel'];

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                errors[field] = `Enter ${field}`;
            }
        });

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onButtonClick("step3form", formData);
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
                                    <form>
                                        <h4 className="text-dark mb-3">Tạo chi tiết chuyến đi </h4>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Đồ ăn</label>
                                                    <input
                                                        id="food"
                                                        type="text"
                                                        className="form-control resume"
                                                        maxLength="100"
                                                        required
                                                        value={formData.food}
                                                        onChange={handleChange}
                                                    />
                                                    {formErrors.food && <p style={{ color: 'red' }}>{formErrors.food}</p>}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Khách sạn</label>
                                                    <input
                                                        id="hotel"
                                                        type="text"
                                                        className="form-control resume"
                                                        maxLength="100"
                                                        required
                                                        value={formData.hotel}
                                                        onChange={handleChange}
                                                    />
                                                    {formErrors.hotel && <p style={{ color: 'red' }}>{formErrors.hotel}</p>}
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Địa điểm</label>
                                                    <input
                                                        id="location"
                                                        type="text"
                                                        className="form-control resume"
                                                        maxLength="100"
                                                        required
                                                        value={formData.location}
                                                        onChange={handleChange}
                                                    />
                                                    {formErrors.location && <p style={{ color: 'red' }}>{formErrors.location}</p>}
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Thời gian</label>
                                                    <input
                                                        id="time"
                                                        type="text"
                                                        className="form-control resume"
                                                        maxLength="100"
                                                        required
                                                        value={formData.time}
                                                        onChange={handleChange}
                                                    />
                                                    {formErrors.time && <p style={{ color: 'red' }}>{formErrors.time}</p>}
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Phương tiện</label>
                                                    <input
                                                        id="vehicle"
                                                        type="text"
                                                        className="form-control resume"
                                                        maxLength="100"
                                                        required
                                                        value={formData.vehicle}
                                                        onChange={handleChange}
                                                    />
                                                    {formErrors.vehicle && <p style={{ color: 'red' }}>{formErrors.vehicle}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-12 mt-2 d-flex justify-content-end gap-2">
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        </Layout>
    );
};

export default Step2Form;
