import styled from 'styled-components';
import padding from '@styles/padding.style';

const breakpoint = 940;

export const Layout = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: ${breakpoint}px) {
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.main`
  display: flex;

  @media (min-width: ${breakpoint}px) {
    width: 60%;
  }
`;

export const ImageWrapper = styled(ContentWrapper)`
  background: ${({ theme }) => theme.colors.black};
  position: static;
  top: 0;

  ${padding}

  @media (min-width: ${breakpoint}px) {
    width: 40%;
  }
`;

export const BookCoverWrapper = styled.div`
  display: flex;
  flex: 1;

  @media (min-width: ${breakpoint}px) {
    max-height: calc(100vh - ${({ theme }) => `${theme.component.spacing * 2}rem`});
    top: 2rem;
    position: sticky;
  }
`;

export const BookCover = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0px 10px 19px 3px rgba(0, 0, 0, 0.3);
  margin: auto;
`;
