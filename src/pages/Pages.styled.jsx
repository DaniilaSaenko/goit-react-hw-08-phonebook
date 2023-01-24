import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


// Styled Home
export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: calc(100vh - 10px);
`;
export const TitleHome = styled.h1`
    text-align: center;
    font-weight: 900px;
    font-size: 60px;
`;
export const SubTitle = styled.h2`
    color: grey;
    font-size: 40px;
`;
export const LinkHome = styled(NavLink)`
   text-decoration: none;
`;

// Styled Login
export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;
    min-height: calc(100vh - 50px);
`;
export const TitleLogin = styled.h1`
    text-align: center;
    font-weight: 500px;
    font-size: 48px;
    margin-bottom:20px;
`;


// Styled Contacts
export const ContainerContacts = styled.div`
    font-size: 32px;
    color: #010101;
    min-height: calc(100vh - 10px);
      padding: 20px;
`;
export const TitleContacts = styled.h1`
    text-align: center;
    font-weight: 500px;
    font-size: 48px;
    margin-bottom:20px;
`;
export const WrappContacts = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;
export const DivContacts = styled.div`
    display: flex;
    flex-direction: column;
`;
