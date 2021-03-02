import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Nav className="mr-auto">
      <NavLink to="/" exact className="nav-link">
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact className="nav-link">
          Контакты
        </NavLink>
      )}
    </Nav>
  );
};

export default Navigation;
