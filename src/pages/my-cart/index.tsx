import { useGetCart } from "@/hooks/useGetCart";
import { Box, Button } from "@mui/material";
import CartItemCard from "@/components/cart/CartItemCard";
import EmptyCart from "/public/emptyCart.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const MyCart = () => {
  const router = useRouter();
  const { cart, addToCart, removeFromCart } = useGetCart();

  if (cart.length === 0) {
    return (
      <Box sx={{ width: "80vw" }}>
        <Image
          src={EmptyCart}
          alt="empty-cart"
          layout="fill"
          objectFit="contain"
        />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {cart.map((cart) => (
          <CartItemCard
            key={cart?.product?.pid}
            cart={cart}
            onAdd={() => addToCart(cart?.product)}
            onRemove={() => removeFromCart(cart?.product)}
          />
        ))}
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#50727B",
          ":hover": { backgroundColor: "#78A083" },
        }}
        onClick={() => router.push("/buy")}
      >
        Buy
      </Button>
    </Box>
  );
};

export default MyCart;
