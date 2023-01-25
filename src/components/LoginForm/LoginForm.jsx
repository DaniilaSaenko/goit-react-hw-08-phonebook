import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Label, Form, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  const handleChange = ({ target: { name, value } }) => {
      switch (name) {
        case 'email':
          return setEmail(value);
        case 'password':
          return setPassword(value);
        default:
          return;
      }
    };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === '' || email === '') {
      // return alert('Please fill in all the fields!');
            Notify.warning(`Please fill in all the fields!`, {
              background: '#eebf31',
              fontSize: '16px',
              width: '350px',
            });
            return;
    }
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  
    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="on">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};
