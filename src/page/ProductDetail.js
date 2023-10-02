import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product.product);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getProductDetail = () => {
    dispatch(productDetail.getProductDetail(id));
    setLoading(false);
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
