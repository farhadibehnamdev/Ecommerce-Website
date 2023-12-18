"use client";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import Stepper from "./Stepper";
import Step from "./Step";
import AddProduct from "../dashboard/AddProduct";
import StepIndicator from "./StepIndicator";

const steps = [
  {
    id: 0,
    name: "Add Product",
    component: <AddProduct />,
  },
  { id: 1, name: "Upload Image" },
];
const StepperUI = function () {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        <nav aria-label="Progress">
          <ol
            role="list"
            className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
          >
            {steps.map((step, index) => (
              <Step
                key={step.id}
                index={activeStep}
                last={isLastStep()}
                completed={completed[index]}
              >
                <StepIndicator step={step} />
              </Step>
            ))}
          </ol>
        </nav>
      </Stepper>

      <div>
        {steps[activeStep].component &&
          React.cloneElement(steps[activeStep].component, {
            onComplete: handleComplete,
          })}
      </div>
    </>
  );
};

export default StepperUI;
