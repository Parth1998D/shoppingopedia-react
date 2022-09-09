import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Loading from "./layout/Loading";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MdOutlineStar } from "react-icons/md";
import { addToCart } from "../redux/action";
import { Fade, FadeTransform } from 'react-animation-components';

function ProductDetail(props) {
  // Learn : Alternate way to get data from object response (object destructring)
  // const params = useParams();
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetail = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProductDetail(await response.clone().json());
      setLoading(false);
    };
    getProductDetail();
  }, []);

  const dispatch = useDispatch();
  const addToCarts = (element) => {
    dispatch(addToCart(element))
  }

  const ProductList = () => {
    return (
      <div  style={{ marginTop: "30px" }}>
        <Row>
          <Col md={2}> </Col>
          <Col md={4}>
          <FadeTransform
                in
                transformProps={{
                  exitTransform: 'scale(0.1) translateY(50%)'
                }}><img src={productDetail.image} alt="dsf" className="productImage" /></FadeTransform>
          </Col>
          <Col md={5} className='product-detail'><FadeTransform in>
            <div className="title">
              <b>
                <h3>{productDetail.title}</h3>
              </b>
            </div>
            <div className="description">
              {productDetail.description.substring(0, 200)}...
            </div>
            <div className="title">
              <b>Price : <span>$</span> <span>{productDetail.price}</span></b>
            </div>
            <div className="rating">
              <span>Rating : </span>
              {productDetail.rating.rate} <span><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></span>
            </div>
            <div className="title">
              <Button variant="outline-secondary" style={{marginRight: '15px'}} onClick={() => addToCarts(productDetail)}>Add to cart</Button>{'    '}
              <Link to='/cart' className="btn btn-secondary">Go to cart</Link>
            </div></FadeTransform>
          </Col>
          <Col md={1}> </Col>
        </Row>
      </div>
    );
  };

  return loading ? <Loading /> : <ProductList />;
}

ProductDetail.propTypes = {};

export default ProductDetail;
