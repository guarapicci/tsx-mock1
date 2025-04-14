This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Expected showcase features

- nextJS server-side rendering playing nice with styled-components and other traditionally client-side libraries.
- global variables implementation in react TSX using context hooks.
- recreation of design language patterns as concise, readable javascript code
- lightweight GUI ( don't excessively compute things that the user won't see )


## Trying it out

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Dev log 

### 23:00 13-04-2025

Picked a basic stack: nextjs, styled-components. 
More stuff will be added soon, but these two need early setup.

Styled-components needs some slight intervention to avoid having to spread ` 'use client' `
all over the project breaking SSR. Good thing the docs give you a quick-start on integrating it.

This project will specifically exploit the react context API 
to provide global state without propagating properties a dozen layers downwards.