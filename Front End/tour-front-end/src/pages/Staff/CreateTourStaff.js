import React, { useState } from "react";
import { Layout, Button } from "antd";
import NavBarWebStaff from "./Navbar/NavBarWebStaff";
import SiderBarWebStaff from "./SlideBar/SiderBarWebStaff";
import Footer from "../../layout/CommonLayout/Footer";
import Step1Form from "../Staff/Form/Step1Form";
import Step2Form from "../Staff/Form/Step2Form";
import Step3Form from "../Staff/Form/Step3Form";
import Step4Form from "../Staff/Form/Step4Form";
import Step5Form from "../Staff/Form/Step5Form";
import Step6Form from "./Form/Step6Form";
import tourServices from "../../services/tour.services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Content } = Layout;

const CreateTourStaff = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        step1Data: {},
        step2Data: {},
        step3Data: {},
        step4Data: {},
        step5Data: {},
        step6Data: {},
    });

    const handleNextStep = (stepKey, data) => {
        setFormData((prevData) => ({
            ...prevData,
            [stepKey]: data,
        }));
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleCreateTour = async () => {
        const completeData = {
            title: formData.step1Data.title,
            startLocation: formData.step1Data.startLocation,
            endLocation: formData.step1Data.endLocation,
            description: formData.step1Data.description,
            price: formData.step1Data.price,
            coverImage: formData.step1Data.coverImage,
            city: formData.step1Data.city,
            tourDetailCreateForm: formData.step3Data,
            listTourSchedule: formData.step2Data.listTourSchedule,
            tourTimeCreateFormSet: formData.step4Data.tourTimeCreateFormSet,
            tourImageCreateForms: formData.step5Data.tourImageCreateForms,
            tourImageCreateForms: formData.step6Data.tourImageCreateForms,

        };
        console.log('completeData:', completeData);




        try {
            const response = await tourServices.createTour(completeData);

            if (response.status === 200) {
                console.log("Tour created successfully:", response.data);
                setCurrentStep(1); // Đặt lại bước hiện tại về bước đầu tiên
                // Thực hiện các hành động khác khi tạo tour thành công
                toast.success("Create Tour Successfully");
            } else {
                console.error("Error creating tour:", response.data);
            }
        } catch (error) {
            console.error("Error creating tour:", error);
        }
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1Form formData={formData.step1Data} onNext={(data) => handleNextStep('step1Data', data)} />;
            case 2:
                return <Step2Form formData={formData.step2Data} onNext={(data) => handleNextStep('step2Data', data)} />;
            case 3:
                return <Step3Form formData={formData.step3Data} onNext={(data) => handleNextStep('step3Data', data)} />;
            case 4:
                return <Step4Form formData={formData.step4Data} onNext={(data) => handleNextStep('step4Data', data)} />;
            case 5:
                return <Step5Form formData={formData.step5Data} onNext={(data) => handleNextStep('step5Data', data)} />;
            case 6:
                return <Step6Form formData={formData.step6Data} onNext={(data) => handleCreateTour(data)} />;
            default:
                return null;
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout>
                <Content style={{ padding: "30px", background: "white", margin: "30px", borderRadius: "12px" }}>
                    <div>
                        <h2>Create Tour for Staff</h2>
                        {renderCurrentStep()}
                        <div style={{ marginTop: "20px" }}>
                            {currentStep > 1 && (
                                <Button type="default" onClick={handlePreviousStep} style={{ marginRight: "10px" }}>
                                    Previous
                                </Button>
                            )}
                            {currentStep < 6 ? (
                                <Button type="primary" onClick={renderCurrentStep().props.onNext}>
                                    Next
                                </Button>
                            ) : (
                                <Button type="primary" onClick={handleCreateTour}>
                                    Submit Tour
                                </Button>
                            )}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default CreateTourStaff;