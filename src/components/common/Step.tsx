import { useContext, useEffect } from "react";
import { StepperContext } from "@/contexts/StepperContext";
import { StepsType } from "../dashboard/Stepper";

export interface StepProps {
  stepNumber: number;
  stepComplete: StepsType[];
  children: React.ReactNode;
}

export const Step = ({ stepNumber, stepComplete, children }: StepProps) => {
  const context = useContext(StepperContext);
  if (!context)
    throw new Error("Stepper must be used within a StepperProvider");
  const { currentStep, completeStep } = context;
  const isCompleted = stepComplete.find(
    (step: StepsType) => step.id === currentStep
  );
  useEffect(() => {
    if (currentStep === stepNumber && isCompleted?.status === "completed") {
      completeStep();
    }
  }, [completeStep]);

  if (currentStep !== stepNumber) {
    return null;
  }

  return <>{children}</>;
};
