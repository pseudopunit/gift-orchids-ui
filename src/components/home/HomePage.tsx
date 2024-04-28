import { Box } from "@mui/material";
import Card from "../common/Card";
import {
  ContactPageTwoTone,
  CorporateFareTwoTone,
  EmojiNatureTwoTone,
} from "@mui/icons-material";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <Card
        icon={
          <CorporateFareTwoTone
            sx={{ fontSize: "100px", color: "#5f98b8e8" }}
          />
        }
        text="Corporate"
        textColor="#5f98b8e8"
        onClick={() => router.push("/corporate")}
      />
      <Card
        icon={
          <EmojiNatureTwoTone sx={{ fontSize: "100px", color: "#5fb8b0e8" }} />
        }
        text="Seasonal"
        textColor="#5fb8b0e8"
        onClick={() => router.push("/seasonal")}
      />
      <Card
        icon={
          <ContactPageTwoTone sx={{ fontSize: "100px", color: "#88b85fe8" }} />
        }
        text="Contact"
        textColor="#88b85fe8"
        onClick={() => router.push("/contact")}
      />
    </Box>
  );
};

export default HomePage;
