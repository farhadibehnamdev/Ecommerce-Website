"use client";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import Stepper from "./Stepper";
import Step from "./Step";
import AddProduct from "../dashboard/AddProduct";

const steps = [
  {
    id: 1,
    name: "Add Product",
    component: <AddProduct />,
    href: "#",
    status: "complete",
  },
  { id: 2, name: "Upload Image", href: "#", status: "current" },
];
const StepperUI = function () {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <nav aria-label="Progress">
          <ol
            role="list"
            className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
          >
            {steps.map((step, index) => (
              <Step key={step.id} completed={completed[index]}>
                <li key={step.name} className="relative md:flex md:flex-1">
                  {completed ? (
                    <a
                      href={step.href}
                      className="group flex w-full items-center"
                    >
                      <span className="flex items-center px-6 py-4 text-sm font-medium">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                          <CheckIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="ml-4 text-sm font-medium text-gray-900">
                          {step.name}
                        </span>
                      </span>
                    </a>
                  ) : step.status === "current" ? (
                    <a
                      href={step.href}
                      className="flex items-center px-6 py-4 text-sm font-medium"
                      aria-current="step"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                        <span className="text-indigo-600">{step.id}</span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-indigo-600">
                        {step.name}
                      </span>
                    </a>
                  ) : (
                    <a href={step.href} className="group flex items-center">
                      <span className="flex items-center px-6 py-4 text-sm font-medium">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                          <span className="text-gray-500 group-hover:text-gray-900">
                            {step.id}
                          </span>
                        </span>
                        <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                          {step.name}
                        </span>
                      </span>
                    </a>
                  )}

                  {index !== steps.length - 1 ? (
                    <>
                      {/* Arrow separator for lg screens and up */}
                      <div
                        className="absolute right-0 top-0 hidden h-full w-5 md:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-full w-full text-gray-300"
                          viewBox="0 0 22 80"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0 -2L20 40L0 82"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentcolor"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </>
                  ) : null}
                </li>
              </Step>
            ))}
          </ol>
        </nav>
      </Stepper>

      <div>
        {steps.findIndex((step) => step.id === activeStep) &&
          steps[activeStep].component}
      </div>
    </div>
  );
};

export default StepperUI;
