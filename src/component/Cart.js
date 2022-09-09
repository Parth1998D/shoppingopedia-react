import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./layout/Loading";
import { removeFromCart } from "../redux/action";
import { Fade, Stagger } from 'react-animation-components';

function Cart(props) {
  const cart = useSelector((state) => state.handleCart);
  console.log('cart',cart);
  const dispatch = useDispatch();
  const removeFromCarts = (id) => {
    dispatch(removeFromCart(id));
  }
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col md={12}>
          <h3>Cart</h3>
        </Col>
        <Stagger in>
        {cart.length == 0 ? (
           <h3 style={{marginTop: '30px'}}>Opps , Cart is Empty</h3>
        ) : (
          
          cart.map((elm) => {
            return <Fade in>
              <Row>
                <Card>
                  <Card.Body className="card-bdy">
                    <div>
                      <img src={elm.image} alt="img" className="cart-image" />
                    </div>
                    <div>
                      <Card.Title>{elm.title}</Card.Title>
                      <Card.Text>
                        {elm.description.substring(0,100)}
                      </Card.Text>
                      <Button variant="outline-secondary" onClick={() => removeFromCarts(elm.id)}>Remove From Cart</Button>
                    </div>
                    <div>
                      <span>Qty : </span> <span>{elm.qty}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            
            </Fade>
          })
        )}
        </Stagger>
      </Row>
    </Container>
  );
}

Cart.propTypes = {};

export default Cart;
