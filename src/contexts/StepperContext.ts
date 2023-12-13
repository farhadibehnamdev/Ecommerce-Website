import { createContext, useContext } from "react";

export interface StepperContextType {
  activeStep: number;
}
const StepperContext = createContext<StepperContextType | {}>({});

export function useSteperContext(): StepperContextType | {} {
  return useContext(StepperContext);
}

export default StepperContext;
