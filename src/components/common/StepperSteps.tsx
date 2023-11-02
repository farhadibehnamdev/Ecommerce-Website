import { StepperContext } from "@/contexts/StepperContext";
import {
  cloneElement,
  isValidElement,
  useContext,
  ReactNode,
  Children,
} from "react";

export const Stepper = ({ children }: { children: ReactNode }) => {
  const context = useContext(StepperContext);
  if (!context)
    throw new Error("Stepper must be used within a StepperProvider");
  const { currentStep } = context;
  return (
    <div>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.props.stepNumber === currentStep) {
          return cloneElement(child);
        }
        return null;
      })}
    </div>
  );
};
