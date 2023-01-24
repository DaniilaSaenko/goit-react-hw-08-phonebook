import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ContainerLogin, TitleLogin } from 'pages/Pages.styled';

export const Register = () => {
  return (
    <ContainerLogin>
      <TitleLogin>Registration</TitleLogin>
      <RegisterForm />
    </ContainerLogin>
  );
}
