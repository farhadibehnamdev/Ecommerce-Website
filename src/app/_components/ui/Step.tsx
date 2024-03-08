import StepContext from "@/contexts/StepContext";
import StepperContext, { StepperContextType } from "@/contexts/StepperContext";
import { forwardRef, useContext, useMemo } from "react";

const Step = forwardRef((props: any, ref: any) => {
  const {
    active: activeProp,
    children,
    completed: completedProp,
    disabled: disabledProp,
    index,
    last,
  } = props;
  const { activeStep } = useContext<any>(StepperContext);
  let [active = false, completed = false, disabled = false] = [
    activeProp,
    completedProp,
    disabledProp,
  ];

  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true;
  } else if (activeStep > index) {
    completed = completedProp !== undefined ? completedProp : true;
  } else if (activeStep < index) {
    disabled = disabledProp !== undefined ? disabledProp : true;
  }

  const contextValue = useMemo(
    () => ({
      index,
      last,
      active,
      completed,
      disabled,
    }),
    [index, last, active, completed, disabled]
  );

  return (
    <StepContext.Provider value={contextValue}>
      <div ref={ref}>{children}</div>
    </StepContext.Provider>
  );
});
Step.displayName = "Step";
export default Step;
