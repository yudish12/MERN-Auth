import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function BasicExample() {
  const [username, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const API = axios.create({baseURL:'http://localhost:2000'})
   const handleSubmit =async ()=>{
    API.post('/api/register', {name:username,email:email,password:password})
    .then(async (res) => {
        const data = res;
        console.log(res.data);
    }).catch((error) => {
        console.log(error)
    });
   }
  return (
    <form onSubmit={handleSubmit}>

    <Form.Group className="mb-3 mx-3 mt-5" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} name="username" value={username}/>
      </Form.Group>

      <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <Form.Text className="text-muted mx-3">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
      <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
      </Form.Group>
      <Button variant="primary" className='mx-3' type='submit'>
        Signup
      </Button>
    </form>
  );
}

export default BasicExample;