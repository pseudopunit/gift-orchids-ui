import { StaticImageData } from "next/image";

export type Product = {
  pid: number;
  productName: string;
  productDescription: string;
  category: string;
  procurementPrice: number;
  sellingPrice: number;
  image: string | StaticImageData;
  availableQuantity: number;
};
