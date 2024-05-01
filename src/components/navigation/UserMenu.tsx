import { useGetCart } from "@/hooks/useGetCart";
import { ShoppingCartTwoTone } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";

const UserMenu = () => {
  const { totalCartItems } = useGetCart();
  return (
    <Box>
      <IconButton>
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
