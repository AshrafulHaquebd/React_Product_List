import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow/ProductRow";
import "./ProductTable.css";
import getData from "../../utils/getData";

const ProductTable = () => {
  const [lists, setLists] = useState(getData());
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const clearInputs = () => {
    return setInputs({
      product_name: "",
      product_id: "",
      product_price: "",
      product_quantity: "",
      product_description: "",
      product_color: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !inputs.product_name ||
      !inputs.product_id ||
      !inputs.product_price ||
      !inputs.product_quantity
    ) {
      alert("Please insert a value");
      return;
    }

    setLists((prevLists) => [...prevLists, inputs]);

    clearInputs();
  };

  const deleteProduct = (id) => {
    const filteredProduct = lists.filter(
      (product) => product.product_id !== id
    );
    setLists(filteredProduct);
  };

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(lists));
  });

  return (
    <>
      <h1 className="product-name">Product List</h1>
      <div className="container bookstore-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="product_name">Product Name: </label>
            <input
              type="text"
              name="product_name"
              value={inputs.product_name || ""}
              id="product_name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="product_id">Product Id: </label>
            <input
              type="text"
              name="product_id"
              value={inputs.product_id || ""}
              id="product_id"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="product_price">Product Price: </label>
            <input
              type="text"
              name="product_price"
              value={inputs.product_price || ""}
              id="product_price"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="product_quantity">Quantity: </label>
            <input
              type="text"
              name="product_quantity"
              value={inputs.product_quantity || ""}
              id="product_quantity"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="product_description">Description: </label>
            <textarea
              name="product_description"
              value={inputs.product_description || ""}
              id="product_description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="color">Select a color: </label>
            <select
              name="product_color"
              id="color"
              value={inputs.color}
              onChange={handleChange}
            >
              <option>Select Color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <input type="submit" value="Add Product" />
        </form>
        <div className="view-container">
          <table className="table">
            <thead>
              <tr>
                <th className="thd">Product Name</th>
                <th className="thd">Product Id</th>
                <th className="thd">Price</th>
                <th className="thd">Quantity</th>
                <th className="thd">Color</th>
                <th className="thd">Description</th>
                <th className="thd">Delete</th>
              </tr>
            </thead>
            <tbody>
              {lists.map((list, index) => (
                <ProductRow
                  key={index}
                  list={list}
                  deleteProduct={deleteProduct}
                />
              ))}
            </tbody>
          </table>
          <div className="btn-wrapper">
            <button onClick={() => setLists([])} className="delete-all-btn">
              Delete all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
