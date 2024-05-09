import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import styles from "./Common.module.css";

const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = () => {
    // Pass the selected payment method to the parent component
    // onSelect(paymentMethod);
  };

  return (
    <FormControl component="fieldset" className={styles.formControl}>
      <FormLabel component="legend" className={styles.legend}>
        Select Payment Method
      </FormLabel>
      <RadioGroup
        aria-label="payment"
        name="payment"
        value={paymentMethod}
        onChange={handlePaymentChange}
        className={styles.radioGroup}
      >
        <FormControlLabel
          value="UPI"
          control={<Radio color="primary" />}
          label="UPI"
          disabled
        />
        <FormControlLabel
          value="Cards"
          control={<Radio color="primary" />}
          label="Cards"
          disabled
        />
        <FormControlLabel
          value="COD"
          control={<Radio color="primary" />}
          label="Cash on Delivery"
        />
      </RadioGroup>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!paymentMethod}
        className={styles.button}
      >
        Proceed to Payment
      </Button>
    </FormControl>
  );
};

export default PaymentOptions;
