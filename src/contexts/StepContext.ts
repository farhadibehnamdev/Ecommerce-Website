import { createContext, useContext } from "react";

export interface StepContextType {
  index: number;
  last: boolean;
  active: boolean;
  completed: boolean;
  disabled: boolean;
}

const StepContext = createContext<StepContextType | {}>({});

if (process.env.NODE_ENV !== "production") {
  StepContext.displayName = "StepContext";
}

export function useStepContext(): StepContextType | {} {
  return useContext(StepContext);
}

export default StepContext;
