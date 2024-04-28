import ItemCard from "@/components/common/ItemCard";
import { ProductData } from "@/static/data/ProductData";
import { Box } from "@mui/material";

const Corporate = () => {
  const products = ProductData;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {products.map((product) => (
        <ItemCard product={product} />
      ))}
    </Box>
  );
};

export default Corporate;
