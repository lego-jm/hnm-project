import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    const url = `http://localhost:5000/products`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="product-wrap">
      {productList.map((products, index) => (
        <ProductCard key={index} products={products} />
      ))}
    </div>
  );
};

export default ProductAll;
