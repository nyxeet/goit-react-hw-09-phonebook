import React, { useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);
  const handlePasswordChange = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Form controlid="formBasicEmail" onSubmit={handleSubmit} autoComplete="off">
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
  );
};

export default Login;
