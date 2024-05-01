import ItemCard from "@/components/common/ItemCard";
import { ProductData } from "@/static/data/ProductData";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const Corporate = () => {
  const products = ProductData;
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {products.map((product) => (
        <ItemCard
          product={product}
          key={product.productName}
          onClick={() => router.push(`/product/${product.pid}`)}
        />
      ))}
    </Box>
  );
};

export default Corporate;
