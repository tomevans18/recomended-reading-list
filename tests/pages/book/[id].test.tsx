import React from 'react';
import BookDetailsPage from '@pages/book/[id]';
import { render } from '@tests/test-util';
import casual from 'casual';
import ReadingList from '@models/reading-list';
import { waitFor, act } from '@testing-library/react';

const mockNumberOfBooks = casual.integer(5, 30);
const mockBooksAPIResponse: ReadingList = {
  books: Array(mockNumberOfBooks)
    .fill('')
    .map(() => ({
      id: casual.uuid,
      cover: casual.url,
      isbn: casual.uuid,
      title: casual.title,
      subtitle: casual.title,
      author: casual.name,
      published: `${casual.date('YYYY-MM-DD')}T${casual.time('HH:mm:ss')}.000Z`,
      publisher: casual.name,
      pages: casual.integer(100, 900),
      description: casual.sentences(casual.integer(2, 5)),
      website: casual.url
    }))
};

mockBooksAPIResponse.books.push({
  id: casual.uuid,
  cover: casual.url,
  isbn: casual.uuid,
  title: casual.title,
  subtitle: casual.title,
  author: mockBooksAPIResponse.books[0].author,
  published: `${casual.date('YYYY-MM-DD')}T${casual.time('HH:mm:ss')}.000Z`,
  publisher: casual.name,
  pages: casual.integer(100, 900),
  description: casual.sentences(casual.integer(2, 5)),
  website: casual.url
});

const mockQuery = jest.fn(() => ({
  id: mockBooksAPIResponse.books[0].id
}));

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: mockQuery()
    };
  }
}));

describe('Book details page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should render loading state on init', async () => {
    await act(async () => {
      const { getByTestId } = render(<BookDetailsPage />);

      await waitFor(() => expect(getByTestId('bookDetail.skeleton')).toBeVisible());
    });
  });

  it('should display back link along with book details and image', async () => {
    fetchMock.mockResponse(JSON.stringify(mockBooksAPIResponse));

    await act(async () => {
      const { getByText, getByTestId } = render(<BookDetailsPage />);

      const { author, title, description, isbn, cover } = mockBooksAPIResponse.books[0];

      await waitFor(() => expect(getByText(title)).toBeVisible());

      const backLink = getByText('Back to books');

      expect(backLink).toBeVisible();
      expect(backLink).toHaveAttribute('href', '/');
      expect(getByText(author)).toBeVisible();
      expect(getByText(description)).toBeVisible();
      expect(getByText(new RegExp(isbn))).toBeVisible();

      const img = getByTestId('bookDetails.image');
      expect(img).toHaveAttribute('src', cover);
      expect(img).toHaveAttribute('alt', title);
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('should display other books by the same author', async () => {
    fetchMock.mockResponse(JSON.stringify(mockBooksAPIResponse));

    await act(async () => {
      const { getByText } = render(<BookDetailsPage />);

      await waitFor(() => expect(getByText(mockBooksAPIResponse.books[0].title)).toBeVisible());
      expect(getByText('Other Books By This Author')).toBeVisible();
      expect(getByText(mockBooksAPIResponse.books[mockNumberOfBooks].title)).toBeVisible();
    });
  });

  it('should display 404 message if not book is found', async () => {
    mockQuery.mockReturnValueOnce({
      id: '-1'
    });
    fetchMock.mockResponse(JSON.stringify(mockBooksAPIResponse));

    await act(async () => {
      const { getByText } = render(<BookDetailsPage />);

      await waitFor(() => expect(getByText('404')).toBeInTheDocument());
    });
  });
});
