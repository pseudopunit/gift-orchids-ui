import Payment from "@/components/buy/Payment";
import UserAddressForm from "@/components/buy/UserAddressInfo";
import UserInfoForm from "@/components/buy/UserInfo";
import CustomStepper from "@/components/common/Stepper";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const steps = [
  { name: "Contact", isStepNavigationAllowed: true },
  { name: "Address", isStepNavigationAllowed: false },
  { name: "Payment", isStepNavigationAllowed: false },
];

const Buy = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepState, setStepState] = useState(steps);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [addressInfo, setAddressInfo] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box height={"100%"}>
      <CustomStepper
        steps={stepState}
        activeStep={activeStep}
        onStepperClick={(i) => setActiveStep(i)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
        }}
      >
        <Box sx={{ mt: 2, mb: 1, flexGrow: 1 }}>
          {activeStep === 0 && (
            <UserInfoForm
              userInfo={userInfo}
              onSubmit={(data) => {
                setUserInfo(data);
                setStepState((prev) => {
                  const newList = [...prev];
                  newList[0] = {
                    name: "Contact",
                    isStepNavigationAllowed: true,
                  };
                  return newList;
                });
              }}
            />
          )}
          {activeStep === 1 && (
            <UserAddressForm
              addressInfo={addressInfo}
              onSubmit={(data) => {
                setAddressInfo(data);
                setStepState((prev) => {
                  const newList = [...prev];
                  newList[1] = {
                    name: "Address",
                    isStepNavigationAllowed: true,
                  };
                  return newList;
                });
              }}
            />
          )}
          {activeStep === 2 && <Payment />}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep < steps.length - 1 && (
            <Button
              disabled={
                activeStep === 0
                  ? !(
                      userInfo.firstName?.trim() !== "" &&
                      userInfo.lastName?.trim() !== "" &&
                      userInfo.email?.trim() !== "" &&
                      userInfo.phoneNumber?.trim() !== ""
                    )
                  : activeStep === 1 &&
                    !(
                      addressInfo.addressLine1?.trim() !== "" &&
                      addressInfo.city?.trim() !== "" &&
                      addressInfo.state?.trim() !== "" &&
                      addressInfo.postalCode?.trim() !== ""
                    )
              }
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Buy;
