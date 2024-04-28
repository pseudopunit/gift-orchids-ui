import { StaticImageData } from "next/image";

export type Product = {
  productName: string;
  productDescription: string;
  category: string;
  procurementPrice: number;
  sellingPrice: number;
  image: string | StaticImageData;
  availableQuantity: number;
};
