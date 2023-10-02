import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [search, setSearch] = useSearchParams();
  const dispatch = useDispatch();

  const getProductList = () => {
    const query = search.get("q") || "";
    dispatch(productAction.getProducts(query));
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
