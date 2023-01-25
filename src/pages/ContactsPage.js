import { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList} from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';

import {
  ContainerContacts,
  TitleContacts,
  WrappContacts,
  DivContacts,
  SubTitle,
} from 'pages/Pages.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerContacts>
      <TitleContacts>Contacts</TitleContacts>
      <WrappContacts>
        <ContactForm />
        {error && <SubTitle>Error...</SubTitle>}
        {isLoading && <Loader />}
        {contacts.length > 0 ? (
          <DivContacts>
            <Filter name="filter" />
            <ContactsList />
          </DivContacts>
        ) : (
          <SubTitle>You have not added contacts yet...</SubTitle>
        )}
      </WrappContacts>
    </ContainerContacts>
  );
};
// export default Contacts;
