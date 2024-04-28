import { Box } from "@mui/material";
import Card from "../common/Card";
import { HomeOutlined } from "@mui/icons-material";

const HomePage = () => {
  return (
    <Box>
      <Card icon={<HomeOutlined />} text="Home" />
    </Box>
  );
};

export default HomePage;
