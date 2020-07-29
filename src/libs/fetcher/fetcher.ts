type ErrorResponse = { message?: string } | string;

export type ErrorLike = {
  response: Response;
  result: ErrorResponse;
  status: number;
} & Error;

const fetcher = async <Data extends unknown>(
  ...args: Parameters<typeof fetch>
): Promise<Data | ErrorLike> => {
  const response = await fetch(...args);

  if (response.status >= 200 && response.status < 300) {
    const text = await response.text(); // As this is a JSON file we need to take the text value first
    return JSON.parse(text) as Promise<Data>;
  }

  let errorMessage = `Response not successful. Received status code ${response.status}`;
  let parsedErrorResponse: { message?: string } | string;

  try {
    parsedErrorResponse = (await response.clone().json()) as { message?: string };

    if (parsedErrorResponse?.message) {
      errorMessage = parsedErrorResponse.message;
    }
  } catch (_error) {
    // its not json
    parsedErrorResponse = await response.clone().text();
  }

  const error = new Error(errorMessage) as ErrorLike;

  error.response = response;
  error.result = parsedErrorResponse;
  error.status = response.status;

  throw error;
};

export default fetcher;
