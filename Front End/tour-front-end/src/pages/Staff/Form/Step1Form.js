import React, { useEffect, useState } from "react";
import { Layout, Input, Button, Form, message } from 'antd';
import { Editor } from "@tinymce/tinymce-react";
import { imageDb } from '../../../utils/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const { Content } = Layout;

const Step1Form = ({ onButtonClick, title, price, city, startLocation, endLocation, image, description }) => {
    // Initialize state variables for error messages
    const [titleError, setTitleError] = useState(null);
    const [priceError, setPriceError] = useState(null);
    const [cityError, setCityError] = useState(null);
    const [startLocationError, setStartLocationError] = useState(null);
    const [endLocationError, setEndLocationError] = useState(null);
    const [imageError, setImageError] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);

    // Initialize form fields with given props using useEffect
    useEffect(() => {
        if (title) {
            document.getElementById("title").value = title;
        }
        if (price) {
            document.getElementById("price").value = price;
        }
        if (city) {
            document.getElementById("city").value = city;
        }
        if (startLocation) {
            document.getElementById("startLocation").value = startLocation;
        }
        if (endLocation) {
            document.getElementById("endLocation").value = endLocation;
        }
        if (description) {
            document.getElementById("description").value = description;
        }
    }, [title, price, city, startLocation, endLocation, description]);

    const handleFileUpload = async (file) => {
        try {
            const storageRef = ref(imageDb, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            return null;
        }
    };

    // Function to validate the form and handle form submission
    const handleSubmit = async (values) => {
        const { imageFile } = values;
        const description = values.description;

        // Validate description
        if (!description) {
            setDescriptionError('Please provide a description.');
            return;
        } else {
            setDescriptionError(null);
        }

        // Handle image file upload
        let downloadURL = null;
        if (imageFile) {
            downloadURL = await handleFileUpload(imageFile.file);
            if (!downloadURL) {
                return;
            }
        }

        // Proceed with form submission using the collected values
        onButtonClick('step2form', {
            ...values,
            image: downloadURL
        });
    };
    // Function to validate form fields
    const checkvalidate = () => {
        let isValid = true;

        // Validate title
        const titleValue = document.getElementById("title").value;
        if (!titleValue) {
            setTitleError("Enter project name");
            isValid = false;
        } else {
            setTitleError(null);
        }

        // Validate price
        const priceValue = document.getElementById("price").value;
        if (!priceValue) {
            setPriceError("Enter price");
            isValid = false;
        } else {
            setPriceError(null);
        }

        // Validate city
        const cityValue = document.getElementById("city").value;
        if (!cityValue) {
            setCityError("Enter city");
            isValid = false;
        } else {
            setCityError(null);
        }

        // Validate start location
        const startLocationValue = document.getElementById("startLocation").value;
        if (!startLocationValue) {
            setStartLocationError("Enter start location");
            isValid = false;
        } else {
            setStartLocationError(null);
        }

        // Validate end location
        const endLocationValue = document.getElementById("endLocation").value;
        if (!endLocationValue) {
            setEndLocationError("Enter end location");
            isValid = false;
        } else {
            setEndLocationError(null);
        }

        // Validate image
        // const imageUpload = document.getElementById("imageUpload").files[0];
        // if (!imageUpload) {
        //     setImageError("Upload an image");
        //     isValid = false;
        // } else {
        //     setImageError(null);
        // }

        const descriptionValue = document.getElementById("description").value;
        // // if (!descriptionValue) {
        // //     setDescriptionError("Enter description");
        // //     isValid = false;
        // // } else {
        // //     setDescriptionError(null);
        // // }

        // If all validations pass, call onButtonClick with form data
        if (isValid) {
            onButtonClick("step2form", {
                title: titleValue,
                price: priceValue,
                city: cityValue,
                startLocation: startLocationValue,
                endLocation: endLocationValue,
                image: image,
                description: descriptionValue
            });
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
                                    <form
                                        method="post"
                                        action="php/contact.php"
                                        name="contact-form"
                                        id="contact-form3"
                                    >
                                        <h4 class="text-dark mb-3">Tạo chuyến đi</h4>

                                        {/* Title input */}
                                        <div className="row">
                                            <div className="col-md-11">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Tên chuyến đi</label>
                                                    <input
                                                        id="title"
                                                        type="text"
                                                        className="form-control resume"
                                                        placeholder="Enter your project name..."
                                                        maxLength="100"
                                                        required
                                                    />
                                                    {/* Conditional rendering of title error message */}
                                                    {titleError && (
                                                        <p className="text-danger mt-2">
                                                            {titleError}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Price and city inputs */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Giá chuyến đi (VND)</label>
                                                    <input
                                                        id="price"
                                                        type="number"
                                                        className="form-control resume"
                                                        placeholder="3000000 VND"
                                                    />
                                                    {/* Conditional rendering of price error message */}
                                                    {priceError && (
                                                        <p className="text-danger mt-2">
                                                            {priceError}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Thành phố đến</label>
                                                    <input
                                                        id="city"
                                                        type="text"
                                                        className="form-control resume"
                                                        placeholder="Enter city"
                                                    />
                                                    {/* Conditional rendering of city error message */}
                                                    {cityError && (
                                                        <p className="text-danger mt-2">
                                                            {cityError}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Start and end location inputs */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Nơi khởi hành</label>
                                                    <input
                                                        id="startLocation"
                                                        type="text"
                                                        className="form-control resume"
                                                        maxLength="100"
                                                        required
                                                    />
                                                    {/* Conditional rendering of start location error message */}
                                                    {startLocationError && (
                                                        <p className="text-danger mt-2">
                                                            {startLocationError}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Nơi kết thúc</label>
                                                    <input
                                                        id="endLocation"
                                                        type="text"
                                                        className="form-control resume"
                                                        maxLength="100"
                                                        required
                                                    />
                                                    {/* Conditional rendering of end location error message */}
                                                    {endLocationError && (
                                                        <p className="text-danger mt-2">
                                                            {endLocationError}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image upload */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Item
                                                    name="imageFile"
                                                    label="Choose Image"
                                                    valuePropName="fileList"
                                                    getValueFromEvent={(e) => e?.fileList}
                                                    rules={[{ required: false, message: 'Please upload an image' }]}
                                                    extra="Upload a file (image)"
                                                >
                                                    <Input type="file" />
                                                </Form.Item>

                                            </div>
                                        </div>

                                        {/* Description input */}
                                        <div className="row">
                                            <div className="col-md-24">
                                                <div className="form-group app-label mt-2">
                                                    <label className="text-muted">Mô tả chuyến đi</label>
                                                    <Editor
                                                        className="fix-height"
                                                        id="description"
                                                        apiKey="axy85kauuja11vgbfrm96qlmduhgfg6egrjpbjil00dfqpwf"
                                                    />
                                                    {/* Conditional rendering of description error message */}

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                {/* Button to proceed to the next step */}
                                <div className="col-lg-12 mt-2 d-flex justify-content-end gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={checkvalidate}
                                    >
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

export default Step1Form;
