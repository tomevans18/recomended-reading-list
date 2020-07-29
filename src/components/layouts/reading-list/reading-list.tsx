import { ReactNode, ReactElement } from 'react';
import {
  Layout,
  ContentWrapper,
  Header,
  TitleWrapper,
  Title,
  BooksWrapper
} from './reading-list.style';

interface ReadingListProps {
  children: ReactNode;
}

const ReadingList = ({ children }: ReadingListProps): ReactElement => (
  <Layout>
    <ContentWrapper>
      <Header>
        <TitleWrapper>
          <Title>Reading List</Title>
        </TitleWrapper>
      </Header>
      <BooksWrapper>{children}</BooksWrapper>
    </ContentWrapper>
  </Layout>
);

export default ReadingList;
