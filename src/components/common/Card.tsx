import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
  text: string;
  icon: ReactNode;
}

const Card = ({ text, icon }: Props) => {
  return (
    <Box className={styles.square}>
      <Box className={styles.icon}>{icon}</Box>
      <Typography className={styles.text}>{text}</Typography>
    </Box>
  );
};

export default Card;
