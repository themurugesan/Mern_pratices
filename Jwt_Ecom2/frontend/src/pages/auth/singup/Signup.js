import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Correct the typo here: use formData instead of FormData
    console.log("email", formData.email);
    console.log("name", formData.name);
    console.log("password", formData.password);
  };

  return (
    <div className="center-form">
      <Form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
