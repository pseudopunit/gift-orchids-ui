import { Product } from "@/types/Product";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/pages/my-cart/CartItemCard.module.css";
import { Cart } from "@/types/Cart";
import { Add, DeleteOutline, Remove } from "@mui/icons-material";

interface Props {
  cart: Cart;
  onAdd: () => void;
  onRemove: () => void;
}

const CartItemCard = ({ cart, onAdd, onRemove }: Props) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.image}>
        <Image
          src={cart.product?.image}
          alt={cart.product?.productName}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box className={styles.textAndButton}>
        <Box className={styles.textContainer}>
          <Typography className={styles.title}>
            {cart.product?.productName}
          </Typography>
          <Typography className={styles.description}>
            {cart.product?.productDescription}
          </Typography>
          <Typography
            className={styles.price}
          >{`Rs. ${cart.product?.sellingPrice}`}</Typography>
        </Box>
        <Box className={styles.addRemoveButtonContainer}>
          <IconButton onClick={onRemove}>
            {cart.count === 1 ? (
              <DeleteOutline className={styles.addRemoveButton} />
            ) : (
              <Remove className={styles.addRemoveButton} />
            )}
          </IconButton>
          <Typography className={styles.countText}>{cart.count}</Typography>
          <IconButton onClick={onAdd}>
            <Add className={styles.addRemoveButton} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItemCard;
