import React from 'react';
import HomePage from '@pages/index';
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

describe('Home page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should render title and loading state on init', async () => {
    await act(async () => {
      const { getByText, getAllByTestId } = render(<HomePage />);

      expect(getByText('Reading List')).toBeVisible();
      await waitFor(() => expect(getAllByTestId('book.skeleton').length).toBe(6));
    });
  });

  it('should display title, author and thumbnail for each book, along with a link to the details page', async () => {
    fetchMock.mockResponse(JSON.stringify(mockBooksAPIResponse));

    await act(async () => {
      const { getByText, getAllByTestId } = render(<HomePage />);
      await waitFor(() =>
        expect(getByText(mockBooksAPIResponse.books[0].title)).toBeInTheDocument()
      );

      mockBooksAPIResponse.books.forEach(({ id, title, author }, index) => {
        expect(getByText(title)).toBeVisible();
        expect(getByText(author)).toBeVisible();
        expect(getAllByTestId('book')[index]).toHaveAttribute('href', `/book/${id}`);
      });
    });
  });
});
