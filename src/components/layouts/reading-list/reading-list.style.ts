import styled from 'styled-components';
import padding from '@styles/padding.style';

export const Layout = styled.section`
  display: flex;
  flex: 1;
  background: ${({ theme }) => theme.colors.grey};
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;

  @media (min-width: 940px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  display: flex;

  ${padding}
`;

export const TitleWrapper = styled.div`
  display: flex;
  max-height: calc(100vh - ${({ theme }) => `${theme.component.spacing * 2}rem`});
  top: 2rem;
  position: sticky;
`;

export const Title = styled.h1`
  margin: auto;
`;

export const BooksWrapper = styled.main`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: space-between;

  ${padding}
`;
