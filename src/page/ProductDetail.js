import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const getProductDetail = async () => {
    const url = `http://localhost:5000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="product-detail-wrap">
      <div>
        <img src={product?.img} alt="" />
      </div>
      <div className="detail-contents">
        <h3>{product?.title}</h3>
        <div>₩{product?.price.toLocaleString()}</div>
        <div className="choice">Conscious choice</div>
        <div className="select-wrap">
          <Form.Select size="sm" aria-label="Default select">
            {product?.size.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <Button className="detail-button" variant="dark">
          추가
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
