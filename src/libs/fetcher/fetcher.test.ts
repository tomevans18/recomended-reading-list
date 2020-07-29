import casual from 'casual';
import fetcher, { ErrorLike } from '.';

const mockUrl = casual.url;
const mockData = {
  [casual.word]: casual.sentence
};

describe('fetcher', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch data correctly from an API', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    // assert on the response
    const response = await fetcher<typeof mockData>(mockUrl);

    expect(response).toStrictEqual(mockData);
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(mockUrl);
  });

  it('should handle fetch error', () => {
    fetchMock.mockResponseOnce('', { status: 500 });

    fetcher<typeof mockData>(mockUrl).catch((err: ErrorLike) =>
      expect(err.message).toBe(`Response not successful. Received status code 500`)
    );
  });

  it('should handle fetch error with a response that includes an error message', () => {
    const mockErrorMessage = casual.sentence;

    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: mockErrorMessage
      }),
      { status: 500 }
    );

    fetcher<typeof mockData>(mockUrl).catch((err: ErrorLike) =>
      expect(err.message).toBe(mockErrorMessage)
    );
  });

  it('should handle fetch error with a response but no error message', () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        [casual.word]: casual.sentence
      }),
      { status: 500 }
    );

    fetcher<typeof mockData>(mockUrl).catch((err: ErrorLike) =>
      expect(err.message).toBe(`Response not successful. Received status code 500`)
    );
  });
});
