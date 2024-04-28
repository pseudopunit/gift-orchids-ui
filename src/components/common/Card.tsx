import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
  text: string;
  icon: ReactNode;
  textColor?: string;
  onClick: () => void;
}

const Card = ({ text, icon, textColor, onClick }: Props) => {
  return (
    <Box className={styles.square} onClick={onClick}>
      <Box className={styles.icon}>{icon}</Box>
      <Typography color={textColor} className={styles.text}>
        {text}
      </Typography>
    </Box>
  );
};

export default Card;
