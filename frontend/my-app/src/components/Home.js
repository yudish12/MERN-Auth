import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
    <h1 className='display-1 heading'>Home</h1>
      <Card className='Card' style={{ width: '28rem',height:'15rem' }}>
      <Card.Body>
        <Card.Title className='mt-2'>Mern Auth</Card.Title>
        <Card.Text>
          Some quick example for login signup form in MERN where if you signup or login you can view your protected information
        </Card.Text>
        <Link to="/login"><Button variant="primary" className='mt-4' >Login</Button></Link>
        <Link to="/signup"><Button variant="primary" className='mx-4 mt-4'>Signup</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home
