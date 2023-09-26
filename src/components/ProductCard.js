import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/products/${products.id}`);
  };

  return (
    <div className="product-card" onClick={goToProductDetail}>
      <div className="product-img">
        <img src={products?.img} alt="" />
      </div>
      <div className="choice">{products?.choice ? "Conscious choice" : ""}</div>
      <div className="title">{products?.title}</div>
      <div>₩{products?.price.toLocaleString()}</div>
      <div className="new-product">{products?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
