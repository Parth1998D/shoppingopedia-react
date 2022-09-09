import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductListing from "./ProductListing";
import { Button, Container, Row } from "react-bootstrap";
import Loading from "./layout/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/action/product";
import { Fade, Stagger } from "react-animation-components";

const Product = (props) => {
  const data = useSelector((state) => state.handleProduct);
  // console.log('darta',data);
  const [filter, setFilter] = useState(data);

  const [loading, setLoading] = useState(false);
  let componetMounted = true;
  const dispatch = useDispatch();
  const getProducts = async () => {
    if (componetMounted) {
      setLoading(true);
      await dispatch(fetchProduct());

      componetMounted = false;
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilter(data);
  }, [data]);

  const filterProduct = (category = null) => {
    const filteredProduct = data.filter((element) => {
      return element.category == category;
    });
    setFilter(filteredProduct);
  };

  return (
    <>
      <div className="row" style={{ marginTop: "50px" }}>
        <h3>Latest Product</h3>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "30px",
          }}
          className="col-md-8 category"
        >
          <Button variant="outline-secondary" onClick={() => setFilter(data)}>
            All
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </Button>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
            <div className="row">
              <ProductListing data={filter} />
            </div>
        )}
      </div>
    </>
  );
};

Product.propTypes = {};

export default Product;
