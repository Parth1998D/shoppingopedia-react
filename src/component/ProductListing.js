import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";
import { Fade, Stagger } from 'react-animation-components';

const ProductListing = (props) => {
  
  const dispatch = useDispatch();
  const addToCarts = (element) => {
    dispatch(addToCart(element))
  }

  return (
    <>
       { 
       /* Learn Map : return new array = so use map as it return html to render
       if we use ForEach = then it does not return anything and html does not get rendered  */
       }
      
      { props.data.length > 0 &&  props.data.map((element) => {
        return <Col md='4'><Fade in>
          <Card key={element.id} >
            <Card.Img style={{ width: "16rem", paddingLeft:'30px' }}  variant="top" src={element.image} />
            <Card.Body>
              <Card.Title><Link to={`/product-detail/${element.id}`}>{element.title.substring(0,20)}</Link></Card.Title>
              <Card.Text>
                <span>Rating : {element.rating.rate} </span>
              </Card.Text>
              <Card.Text>
                <span>Price : {element.price} </span>
              </Card.Text>
              <Button variant="outline-secondary" onClick={() => addToCarts(element)}>Add To cart</Button>
            </Card.Body>
          </Card></Fade></Col>
        ;
      })
      }
      {
        props.data.length == 0 &&(
           <div>No data found</div>
        )}
      
    </>
  );
};

ProductListing.propTypes = {};

export default ProductListing;
