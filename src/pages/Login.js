import { LoginForm } from 'components/LoginForm/LoginForm';
import { ContainerLogin, TitleLogin } from 'pages/Pages.styled';

export const Login = () => {
  return (
    <ContainerLogin>
      <TitleLogin>Login</TitleLogin>
      <LoginForm />
    </ContainerLogin>
  );
}
