import styled from 'styled-components';
import padding from '@styles/padding.style';

export const Content = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: auto;

  ${padding}
`;

export const BackLink = styled.a`
  display: block;
  margin-bottom: 4rem;
  font-size: 0.9rem;
`;

export const Title = styled.h1`
  margin: 1.5rem 0;
`;

export const Description = styled.p`
  margin: 1.5rem 0;
`;

export const OtherBooksByTheAuthor = styled.div`
  margin-top: 4rem;
`;

export const OtherBooksTitle = styled.h6`
  font-size: 1rem;
  margin-bottom: 0.625em;
  color: ${({ theme }) => theme.colors.text};
`;
