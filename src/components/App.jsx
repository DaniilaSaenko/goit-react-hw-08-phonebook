import { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { Layout } from './Layout/Layout';

import { Home } from 'pages/HomePage';
import { Register } from 'pages/RegisterPage';
import { Login } from 'pages/LoginPage';
import { Contacts } from 'pages/ContactsPage';


import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

// const Home = lazy(() => import('../pages/HomePage'));
// const Register = lazy(() => import('../pages/RegisterPage'));
// const Login = lazy(() => import('../pages/LoginPage'));
// const Contacts = lazy(() => import('../pages/ContactsPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="home"></Navigate>} />
                <Route path="home" element={<Home />} /> 
                <Route path="register"
                  element={<PublicRoute> <Register /> </PublicRoute>} />
                <Route path="login"
                  element={<PublicRoute restricted> <Login /> </PublicRoute>} />                
                <Route path="contacts"
                  element={<PrivateRoute> <Contacts /> </PrivateRoute>} />
                <Route path="*" element={<NotFound/>} />
              </Route> 
          </Routes>
        </>
      )}
    </Container>
  );
};
