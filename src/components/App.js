import React, { useEffect } from 'react';
import Layout from './Layout/Layout';
import AppBar from './AppBar/AppBar';
import { Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import ContactsView from '../views/ContactsView';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact component={HomeView} />
        <PublicRoute
          path="/register"
          restricted
          exact
          redirectTo="/contacts"
          component={RegisterView}
        />
        <PublicRoute
          path="/login"
          restricted
          exact
          redirectTo="/contacts"
          component={LoginView}
        />
        <PrivateRoute
          path="/contacts"
          redirectTo="/login"
          component={ContactsView}
        />
      </Switch>
    </Layout>
  );
};

export default App;
