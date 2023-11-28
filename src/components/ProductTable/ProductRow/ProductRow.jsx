import React from "react";
import "./ProductRow.css";

const ProductRow = ({
  list: {
    product_name,
    product_id,
    product_price,
    product_quantity,
    product_color,
    product_description,
  },
  deleteProduct,
}) => {
  return (
    <tr>
      <td>{product_name}</td>
      <td>{product_id}</td>
      <td>{product_price}</td>
      <td>{product_quantity}</td>
      <td>{product_color}</td>
      <td>{product_description}</td>
      <td onClick={() => deleteProduct(product_id)}>delete</td>
    </tr>
  );
};

export default ProductRow;
