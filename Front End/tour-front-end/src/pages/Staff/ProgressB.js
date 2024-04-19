import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Step1Form from "./Form/Step1Form";
import Step2Form from "./Form/Step2Form";
import Step3Form from "./Form/Step3Form";
import Step4Form from "./Form/Step4Form";
import Step5Form from "./Form/Step5Form";

export const ProgressB = () => {
  const step1Content = <Step1Form/>;
  const step2Content = <Step2Form/>;
  const step3Content = <Step3Form/>;
  const step4Content = <Step4Form/>;
  const step5Content = <Step5Form/>;

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <StepProgressBar
      startingStep={0}
      onSubmit={onFormSubmit}
      steps={[
        {
          label: "Bước 1",
          name: "Bước 1",
          content: step1Content
        },
        {
          label: "Bước 2",
          name: "Bước 2",
          content: step2Content,
        },
        {
          label: "Bước 3",
          name: "Bước 3",
          content: step3Content,
        },
        {
          label: "Bước 4",
          name: "Bước 4",
          content: step4Content,
        },
        {
          label: "Bước 5",
          name: "Bước 5",
          content: step5Content,
        }
      ]}
    />
  );
};
