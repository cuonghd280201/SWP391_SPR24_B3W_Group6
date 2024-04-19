import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Step1Form from "./Form/Step1Form";
import Step2Form from "./Form/Step2Form";
import Step3Form from "./Form/Step3Form";
import Step4Form from "./Form/Step4Form";

export const ProgressB = () => {
  const step1Content = <Step1Form/>;
  const step2Content = <Step2Form/>;
  const step3Content = <Step4Form/>;
  const step4Content = <Step3Form/>;
  

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
          label: "Step 1",
          name: "step 1",
          content: step1Content
        },
        {
          label: "Step 2",
          name: "step 2",
          content: step2Content,
        },
        {
          label: "Step 3",
          name: "step 3",
          content: step3Content,
        },
        {
          label: "Step 4",
          name: "Step 4",
          content: step4Content,
        }
      ]}
    />
  );
};
