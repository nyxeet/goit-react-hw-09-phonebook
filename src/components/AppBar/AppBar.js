import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import authSelectors from '../../redux/auth/auth-selectors';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Phonebook App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
