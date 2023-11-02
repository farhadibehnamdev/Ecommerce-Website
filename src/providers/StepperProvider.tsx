import { StepperContext } from "@/contexts/StepperContext";
import { ReactNode, useState } from "react";

export const StepperProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const completeStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <StepperContext.Provider value={{ currentStep, completeStep }}>
      {children}
    </StepperContext.Provider>
  );
};
