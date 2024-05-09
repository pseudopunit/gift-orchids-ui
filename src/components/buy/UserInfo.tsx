import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  userInfo: any;
  onSubmit: (userInfo: any) => void;
}

const UserInfoForm = ({ userInfo, onSubmit }: Props) => {
  const handleChange = (event: any) => {
    const { name, value } = event.target;

    onSubmit({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={userInfo.firstName}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={userInfo.lastName}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone Number"
        name="phoneNumber"
        value={userInfo.phoneNumber}
        onChange={handleChange}
        margin="normal"
      />
    </>
  );
};

export default UserInfoForm;
