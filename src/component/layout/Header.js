import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
// IMP : Learn: to import icon
import Logo from "../../img/logo.png";
import Avtar from "../../img/avatar.png";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = (props) => {
  const cartCount = useSelector((state) => state.handleCart);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleLogin = (event) => {
    toggleModal();
 
    event.preventDefault();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          {/* Learn: TO use apply src */}
          {/* <img src={Logo} className="logo" alt="logo" /> */}
          <span className="brand-name">Shoppingopedia</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Learn : Use Link for navigation */}
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Conatct Us</Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <div className="cartBadge">
                <Link to="/cart">
                  <Badge bg="danger">{cartCount.length}</Badge>
                  <MdShoppingCart style={{marginTop: '-12px'}}/>
                </Link>
              </div>
            </Nav.Link>
            <Nav.Link>
              <Button className="btn btn-secondary" onClick={toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => handleLogin(e)}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary" className="btn-secondary" style={{marginTop: '15px'}}> 
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {};

export default Header;
