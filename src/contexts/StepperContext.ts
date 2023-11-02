import { createContext } from "react";

export interface StepperContextProps {
  currentStep: number;
  completeStep: () => void;
}

export const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);
