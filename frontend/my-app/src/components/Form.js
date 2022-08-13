import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    const handleChange = (e)=>{
       
    }

   const handleSubmit = (e)=>{
    e.preventDefault();
   }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mx-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
        <Form.Text className="text-muted mx-3">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3 mx-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" className='mx-3' type="submit">
        Login
      </Button>
    </Form>
  );
}

export default BasicExample;