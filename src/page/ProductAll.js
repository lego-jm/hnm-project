import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useSearchParams();

  const getProductList = async () => {
    const query = search.get("q") || "";
    const url = `https://my-json-server.typicode.com/lego-jm/hnm-project/products/?q=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setProductList(data);
    } catch (e) {
      throw Error(`에러가 발생했습니다.${e.message}`);
    }
  };

  useEffect(() => {
    getProductList();
  }, [search]);

  return (
    <div className="product-wrap">
      {productList.map((products) => (
        <ProductCard key={products.id} products={products} />
      ))}
    </div>
  );
};

export default ProductAll;
