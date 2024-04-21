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
import tourServices from "../../services/tour.services";

const { Content } = Layout;

const CreateTourStaff = () => {
    const [currentStep, setCurrentStep] = useState(1); // Current step
    const [formData, setFormData] = useState({
        step1Data: {},
        step2Data: {},
        step3Data: {},
        step4Data: {},
        step5Data: {},
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
        try {
            const response = await tourServices.createTour(formData);
            console.log("Tour created successfully:", response.data);
            setCurrentStep(1); // Reset to the initial step after creation
            // Perform any additional actions on successful creation
        } catch (error) {
            console.error("Error creating tour:", error);
        }
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1Form onButtonClick={handleNextStep} formData={formData.step1Data} />;
            case 2:
                return <Step2Form onButtonClick={handleNextStep} formData={formData.step2Data} />;
            case 3:
                return <Step3Form onButtonClick={handleNextStep} formData={formData.step3Data} />;
            case 4:
                return <Step4Form onButtonClick={handleNextStep} formData={formData.step4Data} />;
            case 5:
                return <Step5Form onButtonClick={handleCreateTour} formData={formData.step5Data} />;
            default:
                return null;
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <SiderBarWebStaff choose="menu-key/1" />
            <Layout>
                <NavBarWebStaff />
                <Content style={{ padding: "30px", background: "white", margin: "30px", borderRadius: "12px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                    <div>
                        <h2>Create Tour for Staff</h2>
                        {renderCurrentStep()}
                        <Button  type="primary" onClick={handleCreateTour}>
                Submit Tour
            </Button>
                    </div>
                </Content>
                <Footer />
               
            </Layout>
        </Layout>
    );
};

export default CreateTourStaff;
