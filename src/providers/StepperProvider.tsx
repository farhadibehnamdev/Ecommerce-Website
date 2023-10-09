import {
  DECREMENT_CURRENT_STEP,
  INCREMENT_CURRENT_STEP,
  SET_STEPS,
} from "@/constants";
import { StepperContext } from "@/contexts/StepperContext";
import { useReducer } from "react";

export const defaultStepperState = {
  steps: [],
  currentStep: 0,
};
export const reducer = function (state = defaultStepperState, action: any) {
  const { currentStep, steps } = state;
  const { type, payload } = action;

  switch (type) {
    case SET_STEPS:
      return { ...state, steps: payload.steps };
    case INCREMENT_CURRENT_STEP:
      return {
        ...state,
        currentStep:
          currentStep < steps.length - 1 ? currentStep + 1 : currentStep,
      };
    case DECREMENT_CURRENT_STEP:
      return {
        ...state,
        currentStep: currentStep > 0 ? currentStep - 1 : currentStep,
      };
    default:
      return state;
  }
};
const StepperProvider = function ({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, defaultStepperState);

  return (
    <StepperContext.Provider value={[state, dispatch]}>
      {children}
    </StepperContext.Provider>
  );
};

export default StepperProvider;
