import { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { Layout } from './Layout/Layout';
// import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { NotFoundPage } from 'pages/NotFound';


import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));
// const NotFoundPage = lazy(() => import('../pages/NotFound'));

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
                <Route path="*" element={<NotFoundPage/>} />
              </Route> 
          </Routes>
        </>
      )}
    </Container>
  );
};
