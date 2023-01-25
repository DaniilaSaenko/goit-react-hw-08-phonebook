import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


import { Label, Form, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  
      form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" placeholder="Enter your name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" placeholder="email@mail.com" />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          pattern="(?=.*\d).{7,}"
          placeholder="7 characters or more, please"
        />
      </Label>
      <Button type="submit">Signup</Button>
    </Form>
  );
};
