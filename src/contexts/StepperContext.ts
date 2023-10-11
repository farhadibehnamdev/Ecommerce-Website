import { IStepperContextValue } from "@/providers/StepperProvider";
import { createContext } from "react";

export const StepperContext = createContext<IStepperContextValue | undefined>(
  undefined
);
