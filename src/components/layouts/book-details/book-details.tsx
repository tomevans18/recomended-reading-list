import { ReactNode, ReactElement } from 'react';
import { Book } from '@models/reading-list';
import {
  Layout,
  ContentWrapper,
  ImageWrapper,
  BookCoverWrapper,
  BookCover
} from './book-details.style';

interface BookDetailsLayoutProps {
  book?: Book;
  children: ReactNode;
}

const BookDetailsLayout = ({ book, children }: BookDetailsLayoutProps): ReactElement => (
  <Layout>
    <ImageWrapper as="aside">
      <BookCoverWrapper>
        {book && (
          <BookCover
            data-testid="bookDetails.image"
            src={book.cover}
            alt={book.title}
            loading="lazy"
          />
        )}
      </BookCoverWrapper>
    </ImageWrapper>
    <ContentWrapper>{children}</ContentWrapper>
  </Layout>
);

export default BookDetailsLayout;
