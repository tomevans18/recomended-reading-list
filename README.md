# Recommended Reading List Technical Test

## Acceptance criteria

- Fetch data from https://hokodo-frontend-interview.netlify.com/data.json
- Display the list of books on a page, each book item showing
  - Book title
  - Author name
  - Cover image (thumbnail size)
  - 'More information' link
- Clicking on the 'More information' link should open another page showing
  - Book title
  - Author name
  - ISBN
  - Cover image (full size)
  - A list of book titles by the same Author (with links)
  - 'Back to list' link

## Running the code

### Prerequisites

You must have the following installed:

- Node.js version 12 or higher
- Yarn

### Running the project in dev mode

Navigate to the project folder via a terminal.
Then run the following command to install all project dependencies (including development).

```bash
yarn
yarn dev
```

### Running the project in production

Navigate to the project folder via a terminal.
Then run the following command to install all project dependencies (including development).

```bash
yarn
yarn build
yarn --production
NODE_ENV=production yarn start
```

## Notes

- the API route provides a proxy to the json file as CORs would prevent direct browser access
- SWR uses context to cache the content cross page, meaning a global state manager is unnecessary (e.g. context, redux, mobx)
- I chose Next.js as the framework because of its community support, developer experience, working relationship with the core Google Chrome and Facebook React team
- For the images I would have liked the ability to embed an svg placeholder or used another method as the current approach can cause some initial jumps
- I haven't looked into error states as I felt this was unneeded as part of this test
- I would have liked to add transitions and animations but the time didn't allow for this
