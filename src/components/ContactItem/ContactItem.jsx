import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';

import { Container, Item, Button } from './ContactItem.styled';

export const Contact = ({ name, number, id }) =>{
  const dispatch = useDispatch();
  const deleteCont = () => dispatch(delContact(id));
  return (
    <Container>
      <Item>
        {name} :  {number}
      </Item>
      <Button type="button" onClick={deleteCont}>
        Delete 🗑
      </Button>
    </Container>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
