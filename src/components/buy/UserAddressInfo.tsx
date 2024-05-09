import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  addressInfo: any;
  onSubmit: (addressInfo: any) => void;
}

const UserAddressForm = ({ addressInfo, onSubmit }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    onSubmit({
      ...addressInfo,
      [name]: value,
    });
  };

  return (
    <>
      <TextField
        fullWidth
        label="Address Line 1"
        name="addressLine1"
        value={addressInfo.addressLine1}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Address Line 2"
        name="addressLine2"
        value={addressInfo.addressLine2}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="City"
        name="city"
        value={addressInfo.city}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="State"
        name="state"
        value={addressInfo.state}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Postal Code"
        name="postalCode"
        value={addressInfo.postalCode}
        onChange={handleChange}
        margin="normal"
      />
    </>
  );
};

export default UserAddressForm;
