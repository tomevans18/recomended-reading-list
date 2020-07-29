import styled from 'styled-components';

export const Link = styled.a`
  width: 100%;

  @media (min-width: 450px) {
    width: 48%;
  }
`;

export const Book = styled.article`
  margin: ${({ theme }) => `${theme.component.spacing}rem`} 0;
  padding: ${({ theme }) => `${theme.component.spacing}rem`};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5%;
  box-shadow: 0px 10px 19px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const BookTitle = styled.h4`
  margin: 1.5rem 0;
`;
