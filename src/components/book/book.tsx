import { ReactElement } from 'react';
import { Book as BookType } from '@models/reading-list';
import NextLink from 'next/link';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link, Book as StyledBook, BookTitle } from './book.style';

interface BookProps {
  book: BookType;
}

export const BookSkeleton = (): ReactElement => (
  <StyledBook data-testid="book.skeleton">
    <SkeletonTheme color="#dfdfdf" highlightColor="#f1f3f5">
      <Skeleton height={200} style={{ marginBottom: '1.5rem' }} />
      <Skeleton height={25} count={3} />
      <Skeleton style={{ marginTop: '1.5rem' }} />
    </SkeletonTheme>
  </StyledBook>
);

const Book = ({ book }: BookProps): ReactElement => (
  <NextLink href="/book/[id]" as={`/book/${book.id}`} passHref>
    <Link data-testid="book" title={book.title}>
      <StyledBook>
        <img src={book.cover} alt={book.title} loading="lazy" />
        <BookTitle>{book.title}</BookTitle>
        <p>{book.author}</p>
      </StyledBook>
    </Link>
  </NextLink>
);

export default Book;
