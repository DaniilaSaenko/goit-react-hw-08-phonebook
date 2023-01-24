import { ContainerHome, TitleHome, LinkHome } from 'pages/Pages.styled';

const Home = () => {
  return (
    <ContainerHome>
      <TitleHome>
        Your personal phonebook app <LinkHome to="/register">📲</LinkHome>
      </TitleHome>
    </ContainerHome>
  );
};
export default Home;