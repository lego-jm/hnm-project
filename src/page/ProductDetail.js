import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/lego-jm/hnm-project/products/${id}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setProduct(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw Error(`에러가 발생했습니다.${e.message}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProductDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="product-detail-wrap">
          <ClipLoader
            color="#dc3545"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
                {product?.size.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </div>
            <Button className="detail-button" variant="dark">
              추가
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
