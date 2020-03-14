import React, { Component } from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class App extends Component {
  render() {
  return (
    <Form className="login-form">
    <h1><span className="font-weight-bold">Counselo</span>.in</h1> 
    <h3 className="text-center">Login or Signup</h3>
    <FormGroup>
      <Label>
        Email
      </Label>
      <Input type="email" placeholder="Email"></Input>
    </FormGroup>
    <FormGroup>
      <Label>
        Password
      </Label>
      <Input type="password" placeholder="Password"></Input>
    </FormGroup>
    <Button className="btn-lg btn-dark btn-block">
      Log in
    </Button>
    </Form>
  );
 }
}

export default App;
