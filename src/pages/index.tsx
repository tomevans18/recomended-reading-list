import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function Home(): React.ReactElement {
  return <Title>My page</Title>;
}

export default Home;
