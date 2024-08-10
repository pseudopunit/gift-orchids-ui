import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  Switch,
} from "@mui/material";
import { useState } from "react";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import AddProductCategoryMapping from "./AddProductCategoryMapping";

const enum UploadDataType {
  Product,
  Category,
  ProductCategoryMapping,
}

const AddData = () => {
  const [dataType, setDataType] = useState(UploadDataType.Category);

  return (
    <>
      <Box>Choose data type:</Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setDataType(UploadDataType.Category)}
            sx={{ p: 0 }}
          >
            <ListItemIcon>
              <Radio
                edge="start"
                checked={dataType === UploadDataType.Category}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary="Category" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setDataType(UploadDataType.Product)}
            sx={{ p: 0 }}
          >
            <ListItemIcon>
              <Radio
                edge="start"
                checked={dataType === UploadDataType.Product}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary="Product" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setDataType(UploadDataType.ProductCategoryMapping)}
            sx={{ p: 0 }}
          >
            <ListItemIcon>
              <Radio
                edge="start"
                checked={dataType === UploadDataType.ProductCategoryMapping}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary="Product - Caterogy Mapping" />
          </ListItemButton>
        </ListItem>
      </List>
      {dataType === UploadDataType.Category && <AddCategory />}
      {dataType === UploadDataType.Product && <AddProduct />}
      {dataType === UploadDataType.ProductCategoryMapping && (
        <AddProductCategoryMapping />
      )}
    </>
  );
};

export default AddData;
