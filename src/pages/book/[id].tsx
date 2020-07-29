import { ReactElement } from 'react';
import useSWR from 'swr';
import ReadingList from '@models/reading-list';
import { useRouter } from 'next/router';
import BookDetailsLayout from '@components/layouts/book-details';
import BookDetails, { BookDetailsSkeleton } from '@components/book-details';
import { ErrorLike } from '@libs/fetcher';
import Head from 'next/head';

function Book(): ReactElement {
  const { data: bookList, error } = useSWR<ReadingList, ErrorLike>('http://localhost:3000/api');

  const {
    query: { id }
  } = useRouter();

  if (error) return <h1>Something went wrong!</h1>;
  if (!bookList) {
    return (
      <BookDetailsLayout>
        <BookDetailsSkeleton />
      </BookDetailsLayout>
    );
  }

  const book = bookList.books.find(({ id: bookId }) => bookId === id);
  if (!book) return <h1>404</h1>;

  const authorsOtherBooks = bookList.books.filter(
    ({ title, author }) => author === book?.author && title !== book.title
  );

  return (
    <>
      <Head>
        <title>{book.title} - Recommended Reading List</title>
      </Head>
      <BookDetailsLayout book={book}>
        <BookDetails book={book} authorsOtherBooks={authorsOtherBooks} />
      </BookDetailsLayout>
    </>
  );
}

export default Book;
