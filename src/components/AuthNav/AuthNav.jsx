import { AuthNavStyled } from './AutNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavStyled to="/register">Signup</AuthNavStyled>
      <AuthNavStyled to="/login">Login</AuthNavStyled>
    </div>
  );
};
