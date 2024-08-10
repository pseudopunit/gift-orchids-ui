import { Button, Container, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData({ ...formData, image: file });
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to the server
    console.log(formData);
  };

  return (
    <Container maxWidth="md" sx={{ p: 0 }}>
      <Typography
        variant="h5"
        component="h1"
        align="left"
        gutterBottom
        sx={{ color: "#78A083" }}
      >
        Add product information:
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          required
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          required
          onChange={(e) => handleChange("description", e.target.value)}
        />
        {/* toDo: update below to use dropdown */}
        <TextField
          fullWidth
          label="Category"
          variant="outlined"
          margin="normal"
          disabled
          onChange={(e) => handleChange("category", e.target.value)}
        />
        <TextField
          fullWidth
          label="Procurement price"
          variant="outlined"
          margin="normal"
          type="number"
          required
          inputProps={{ step: "0.01" }}
          onChange={(e) => handleChange("procurementPrice", e.target.value)}
        />
        <TextField
          fullWidth
          label="Selling price"
          variant="outlined"
          margin="normal"
          type="number"
          required
          inputProps={{ step: "0.01" }}
          onChange={(e) => handleChange("sellingPrice", e.target.value)}
        />
        <TextField
          fullWidth
          label="Available quantity"
          variant="outlined"
          margin="normal"
          type="number"
          required
          onChange={(e) => handleChange("availableQuantity", e.target.value)}
        />
        <Input
          id="upload-image"
          type="file"
          onChange={handleImageChange}
          hidden
          fullWidth
          required
          sx={{ mb: 4 }}
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

export default AddProduct;