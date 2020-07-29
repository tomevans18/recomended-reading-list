import { ReactElement } from 'react';
import useSWR from 'swr';
import ReadingListType from '@models/reading-list';
import ReadingList from '@components/layouts/reading-list';
import Book, { BookSkeleton } from '@components/book';
import { v4 as uuid } from 'uuid';
import { ErrorLike } from '@libs/fetcher';

function Home(): ReactElement {
  const { data: bookList, error } = useSWR<ReadingListType, ErrorLike>('http://localhost:3000/api');

  if (error) return <h1>Something went wrong!</h1>;
  if (!bookList)
    return (
      <ReadingList>
        {Array(6)
          .fill('')
          .map(() => (
            <BookSkeleton key={uuid()} />
          ))}
      </ReadingList>
    );

  return (
    <ReadingList>
      {bookList.books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </ReadingList>
  );
}

export default Home;
