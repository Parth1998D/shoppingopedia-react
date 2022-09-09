import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Fade, Stagger } from 'react-animation-components';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameError: '',
      emailError: '',
      messageError: ''
    }
   
  }

  validateData(data) {
    let isError = false;
    if (!data.name) {
      isError = true;
      this.setState({nameError: 'Please Enter Name'})
    } else {
      this.setState({nameError: ''})
    }
  
    if (!data.message) {
      isError = true;
      this.setState({messageError: 'Please Enter message'})
    } else {
      this.setState({messageError: ''})
    }
  
    if (!data.email) {
      isError = true;
      this.setState({emailError: 'Please Enter Email ID'})
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      isError = true;
      this.setState({emailError: 'Invalid email address'})
    } else {
      this.setState({emailError: ''})
    }
  
    return isError;
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    if (!this.validateData(this.state)) {
      event.preventDefault();
      this.setState({name: ''})
      this.setState({email: ''})
      this.setState({message: ''})
      this.setState({nameError: ''})
      this.setState({emailError: ''})
      this.setState({messageError: ''})
      alert('Data submited successfully')
    }
  
  }

  render() {
    return(
      <Container style={{ marginTop: "50px" }}>
         <Row>
        
         <Col md={6}>
        <form id="contact-form" >
        <Row>
          <div className="form-group" style={{marginTop:'15px'}}>
            <label htmlFor="name" style={{float:"left"}}>Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            { this.state.nameError && <span style={{float:"left",color:"red"}}>{ this.state.nameError}</span>}
          </div>
          </Row>
          <Row>
          <div className="form-group" style={{marginTop:'15px'}}>
            <label htmlFor="exampleInputEmail1" style={{float:"left"}}>Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            { this.state.emailError && <span style={{float:"left",color:"red"}}>{ this.state.emailError}</span>}
          </div>
          </Row>
          <Row>
          <div className="form-group" style={{marginTop:'15px'}}>
            <label htmlFor="message" style={{float:"left"}}>Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            { this.state.messageError && <span style={{float:"left",color:"red"}}>{ this.state.messageError}</span>}
          </div>
          </Row>
          <button type="button" className="btn btn-secondary" style={{marginTop:'15px'}} onClick={(e) => this.handleSubmit(e)} >Submit</button>
        </form>
        </Col>
        <Col md={4}></Col>
        </Row>
      </Container>
    );
  }


}

export default Contact;