import { Product } from "@/types/Product";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/components/common/ItemCard.module.css";

interface Props {
  product: Product;
  onClick: () => void;
}

const ItemCard = ({ product, onClick }: Props) => {
  return (
    <Box className={styles.container} onClick={onClick}>
      <Box className={styles.image}>
        <Image
          src={product.image}
          alt={product.productName}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box className={styles.textContainer}>
        <Typography className={styles.title}>{product.productName}</Typography>
        <Typography className={styles.description}>
          {product.productDescription}
        </Typography>
        <Typography
          className={styles.price}
        >{`Rs. ${product.sellingPrice}`}</Typography>
      </Box>
    </Box>
  );
};

export default ItemCard;
