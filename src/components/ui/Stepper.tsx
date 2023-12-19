import StepperContext from "@/contexts/StepperContext";
import React, { cloneElement, forwardRef, useMemo } from "react";

interface StepperProps {
  activeStep: number;
  children: React.ReactNode[];
}

const Stepper = forwardRef((props: any, ref: any) => {
  const { activeStep = 0, children } = props;
  const childrenArray = React.Children.toArray(children).filter(Boolean);

  const steps = childrenArray.map((step: any, index: number) => {
    return cloneElement(step, {
      index,
      last: index + 1 === childrenArray.length,
      ...step.props,
    });
  });
  const contextValue = useMemo(() => ({ activeStep }), [activeStep]);
  return (
    <StepperContext.Provider value={contextValue}>
      <div ref={ref}>{steps}</div>
    </StepperContext.Provider>
  );
});
Stepper.displayName = "Stepper";
export default Stepper;
