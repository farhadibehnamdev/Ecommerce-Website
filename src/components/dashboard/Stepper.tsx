"use client";
import { Step } from "@/components/common/Step";
import { StepperProvider } from "@/providers/StepperProvider";
import { Stepper } from "@/components/common/StepperSteps";
import { useState } from "react";
import AddProduct from "./AddProduct";
import FileInputUI from "./FileInputUI";
import StepHeader from "./StepHeader";

export type StepsType = {
  id: number;
  name: string;
  status: string;
  current: boolean;
};
const steps: StepsType[] = [
  { id: 1, name: "Add Product", status: "not", current: true },
  { id: 2, name: "Image Upload", status: "not", current: false },
];

const StepperUI = function () {
  const [stepComplete, setStepComplete] = useState<StepsType[]>(steps);
  return (
    <StepperProvider>
      <StepHeader steps={stepComplete} />

      <Stepper>
        <Step stepNumber={1} stepComplete={stepComplete}>
          <AddProduct steps={stepComplete} setStepComplete={setStepComplete} />
        </Step>
        <Step stepNumber={2} stepComplete={stepComplete}>
          <FileInputUI />
        </Step>
      </Stepper>
    </StepperProvider>
  );
};

export default StepperUI;
