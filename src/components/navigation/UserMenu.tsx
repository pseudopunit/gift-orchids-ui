import { useGetCart } from "@/hooks/useGetCart";
import { ShoppingCartTwoTone } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";

const UserMenu = () => {
  const { totalCartItems } = useGetCart();
  const router = useRouter();

  return (
    <Box>
      <IconButton onClick={() => router.push("/my-cart")}>
        <Badge
          badgeContent={totalCartItems}
          color="primary"
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <ShoppingCartTwoTone />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default UserMenu;
