# NextJS Sample App

## Purpose

This is a [Next.js](https://nextjs.org/) sample project, showcasing some of its strengths, including routing and PWA. It was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Demo available here](https://nextjs-sample-project-pxtnpxtn.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see it in action.

Note: I wouldn't usually commit the .env, however for completeness I did.

## Stack

-   [Next.js](https://nextjs.org/)
-   [React.js](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)

## Packages

-   [SASS](https://sass-lang.com/)
-   [Axios](https://github.com/axios/axios)
-   [Zustand](https://github.com/pmndrs/zustand)
-   [parse-link-header](https://github.com/thlorenz/parse-link-header)
-   [Next-PWA](https://github.com/shadowwalker/next-pwa)

## Features

-   Pagination
-   Filtering options
-   Full PWA support ([screenshot](https://ibb.co/S7cYZW7))
-   Noteworthy:
    -   Persistent order and page number (going from dashboard to site, and back).
    -   Custom 404 page for routes that don't exist (http://localhost:3000/example).
    -   Direct call, mailTo and Google Maps linked to profile contact information.

## Additional Features To Add

-   Firebase (DB + Auth)
-   Search functionality (API function already available in api-sites.ts)
-   Dark mode
-   Unit tests

## License

MIT
