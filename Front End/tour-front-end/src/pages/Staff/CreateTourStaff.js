import React, { useState } from "react";

import { Layout } from "antd";
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
  const [currentStep, setCurrentStep] = useState(1); // Bước hiện tại


  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
    step4Data: {},
    step5Data: {},
  });

  // Hàm để xử lý tiến đến bước tiếp theo
  const handleNextStep = (stepKey, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepKey]: data,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Hàm để quay lại bước trước
  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };



  // Hiển thị form cho bước hiện tại
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Form onButtonClick={handleNextStep} {...formData.step1Data} />;
      case 2:
        return <Step2Form onButtonClick={handleNextStep} {...formData.step2Data} />;
      case 3:
        return <Step3Form onButtonClick={handleNextStep} {...formData.step3Data} />;
      case 4:
        return <Step4Form onButtonClick={handleNextStep} {...formData.step4Data} />;
      case 5:
        return <Step5Form />;
      default:
        return null;
    }
  };

  const handleCreateTour = async () => {
    try {
      const response = await tourServices.createTour(formData);

      // Handle successful tour creation
      console.log("Tour created successfully:", response.data);
      // Reset all form data and navigate to the initial step
      setCurrentStep(1);
    } catch (error) {
      console.error("Error creating tour:", error);
    }
  };

  return (

    <Layout style={{ minHeight: "100vh" }}>
      <SiderBarWebStaff choose={"menu-key/1"} />
      <Layout>
        <NavBarWebStaff />
        <Content style={{ padding: "30px", background: "white", margin: "30px", borderRadius: "12px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
          <div>
            <h2>Create Tour for Staff</h2>
            {renderCurrentStep()}
            <button type="button" onClick={handleCreateTour}>
              Submit
            </button>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>


  );
};

export default CreateTourStaff;
