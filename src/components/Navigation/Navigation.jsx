import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavStyled to="/">Home</NavStyled>
      {isLoggedIn && <NavStyled to="/contacts">Contacts</NavStyled>}
    </nav>
  );
};
