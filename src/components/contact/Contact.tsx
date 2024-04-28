import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactPage: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ color: "#78A083" }}
      >
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Contact Number"
          type="tel"
          variant="outlined"
          margin="normal"
          inputProps={{
            pattern: "[0-9]{1,10}",
          }}
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#50727B",
            ":hover": { backgroundColor: "#78A083" },
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
