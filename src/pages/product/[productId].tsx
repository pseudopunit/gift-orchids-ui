import { ProductData } from "@/static/data/ProductData";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/pages/product/Product.module.css";
import { useGetCart } from "@/hooks/useGetCart";

const normaliseQueryParam = (param?: string | string[]) => {
  if (typeof param == "object") {
    return param[0];
  }
  return param;
};

const ProductPage = () => {
  const router = useRouter();
  const { addToCart } = useGetCart();
  const pid = normaliseQueryParam(router.query.productId);

  const product = ProductData.find((it) => it.pid.toString() == pid ?? "-1");

  if (!product) {
    return <Typography>No product found with {pid}</Typography>;
  }

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>{product.productName}</Typography>
      <Box className={styles.image}>
        <Image
          src={product.image}
          alt={product.productName}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Typography className={styles.description}>
        {product.productDescription}
      </Typography>
      <Typography
        className={styles.price}
      >{`Rs. ${product.sellingPrice}`}</Typography>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#78A083",
          ":hover": { backgroundColor: "#78A083" },
        }}
        onClick={() => addToCart(product)}
      >
        Add to cart
      </Button>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#50727B",
          ":hover": { backgroundColor: "#78A083" },
        }}
      >
        Buy
      </Button>
    </Box>
  );
};

export default ProductPage;
