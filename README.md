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

### 2025-04-13

Picked a basic stack: nextjs, styled-components. 
More stuff will be added soon, but these two need early setup.

Styled-components needs some slight intervention to avoid having to spread ` 'use client' `
all over the project breaking SSR. Good thing the docs give you a quick-start on integrating it.

This project will specifically exploit the react context API 
to provide global state without propagating properties a dozen layers downwards.

### 2025-04-14

Added a global (overridable) settings object using the react context API. It works as follows:

**1)** a `Settings` component acts as a provider for the `GlobalSettings` context. ![settings_context](https://github.com/user-attachments/assets/7a9efd49-5c50-4415-ad0d-48876e69180c)
   
**2)** the main page wraps the entire content as children of an instance of `Settings`. Notice how one of its children has hilariously big padding around the label. ![component_on_page](https://github.com/user-attachments/assets/c2be697f-2d8c-4909-b687-33687456ea4f)
   
**3)** the `SomeButton` component uses whatever context is provided by the nearest parent to find out how much padding it needs. The instance with enormous padding space looks like that because the padding is obtained from the context, which in turn is set on the `settings` file from **1)**, which specifies a default padding of 86px.  ![context_on_button](https://github.com/user-attachments/assets/6c091c65-8084-4139-aae5-0706b3bae476)

Conclusion? **DO NOT USE CONTEXT PROVIDERS FOR GLOBAL THEME.** anything that pulls values from a context becomes a client component, which invalidates the whole point of using Next.js (render stuff server-side so the client gets neat, valid HTML) in the first place. **Do use it for dynamic stuff**, as this is usually already client-side by definition, and will spare you of manually propagating like: ` <A someval={x}><B someval={x}><C someval={x}></A>>/B></C> `.
