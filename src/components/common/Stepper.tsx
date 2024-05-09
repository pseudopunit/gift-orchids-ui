import React from "react";
import {
  Avatar,
  Box,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { CheckCircleRounded } from "@mui/icons-material";
import styles from "@/components/common/Stepper.module.css";

interface StepProp {
  name: string;
  isStepNavigationAllowed: boolean;
}

interface Props {
  activeStep: number;
  steps: StepProp[];
  onStepperClick: (labelIndex: number) => void;
}

const CustomStepper = ({ activeStep, steps, onStepperClick }: Props) => {
  return (
    <Box className={styles.stepper}>
      <Stepper
        activeStep={activeStep}
        // connector={
        //   <StepConnector
        //     classes={{
        //       active: styles.activeLineConnector,
        //       completed: styles.completedLineConnector,
        //       disabled: styles.disabledLineConnector,
        //       line: styles.lineConnector,
        //     }}
        //   />
        // }
      >
        {steps.map((step, index) => {
          const stepProps = {};
          //   return (
          //     <Step
          //       key={step.name}
          //       {...stepProps}
          //       onClick={() =>
          //         step.isStepNavigationAllowed && onStepperClick(index)
          //       }
          //       className={
          //         step.isStepNavigationAllowed
          //           ? styles.pointerEvent
          //           : styles.disablePointer
          //       }
          //     >
          //       <StepLabel
          //         StepIconProps={{
          //           icon:
          //             index >= activeStep ? (
          //               <Avatar
          //                 className={
          //                   index === activeStep
          //                     ? styles.activeStepIcon
          //                     : styles.inactiveStepIcon
          //                 }
          //               >
          //                 {index + 1}
          //               </Avatar>
          //             ) : (
          //               <CheckCircleRounded
          //                 className={styles.completedStepIcon}
          //               />
          //             ),
          //         }}
          //         sx={{
          //           "&.Mui-disabled": { cursor: "inherit" },
          //         }}
          //       >
          //         <Typography
          //           className={styles.completedStepLabel}
          //           color={
          //             activeStep === index
          //               ? "#191F1C"
          //               : activeStep > index
          //               ? "#008d75"
          //               : "#4F4F4F"
          //           }
          //         >
          //           {step.name}
          //         </Typography>
          //       </StepLabel>
          //     </Step>
          //   );
          return (
            <Step
              key={step.name}
              {...stepProps}
              onClick={() =>
                step.isStepNavigationAllowed && onStepperClick(index)
              }
            >
              <StepLabel>{step.name}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;
