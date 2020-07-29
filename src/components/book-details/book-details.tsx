import { ReactElement } from 'react';
import Link from 'next/link';
import { Book } from '@models/reading-list';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
  Content,
  BackLink,
  Title,
  Description,
  OtherBooksByTheAuthor,
  OtherBooksTitle
} from './book-details.style';

interface BookDetailsProps {
  book: Book;
  authorsOtherBooks?: Book[];
}

export const BookDetailsSkeleton = (): ReactElement => (
  <Content data-testid="bookDetail.skeleton">
    <SkeletonTheme color="#dfdfdf" highlightColor="#f1f3f5">
      <Skeleton style={{ marginBottom: '4rem' }} width={150} />
      <br />
      <Skeleton style={{ marginBottom: '1.5rem' }} width={150} />
      <Skeleton height={37} count={2} />
      <Skeleton style={{ marginTop: '1.5rem' }} />
      <Skeleton count={4} />
      <Skeleton style={{ marginTop: '1.5rem' }} width={200} />
    </SkeletonTheme>
  </Content>
);

const BookDetails = ({ book, authorsOtherBooks }: BookDetailsProps): ReactElement => (
  <Content data-testid="bookDetail.skeleton">
    <Link href="/" passHref>
      <BackLink>Back to books</BackLink>
    </Link>
    <p>{book.author}</p>
    <Title>{book.title}</Title>
    <Description>{book.description}</Description>
    {book.isbn !== 'unknown' && <p>ISBN: {book.isbn}</p>}
    {!!authorsOtherBooks?.length && (
      <OtherBooksByTheAuthor>
        <OtherBooksTitle>Other Books By This Author</OtherBooksTitle>
        <p>
          {authorsOtherBooks?.map(({ id, title }) => (
            <Link href="/book/[id]" as={`/book/${id}`} key={id}>
              <a>{title}</a>
            </Link>
          ))}
        </p>
      </OtherBooksByTheAuthor>
    )}
  </Content>
);

export default BookDetails;
