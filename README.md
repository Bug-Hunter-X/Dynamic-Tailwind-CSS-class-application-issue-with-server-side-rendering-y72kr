# Dynamic Tailwind CSS Class Application Issue with SSR

This repository demonstrates a common issue when using Tailwind CSS with frameworks that utilize server-side rendering (SSR), such as Next.js or Nuxt.js.  The problem arises when dynamic class updates are not properly reflected after the initial render.

## The Problem

When components are rendered on the server, Tailwind's class names are processed, but subsequent state changes or prop updates on the client may not trigger a re-evaluation of Tailwind's directives. This results in styles not being updated as expected.

## Solution

The solution provided uses techniques to ensure that class names are dynamically applied even after the initial render.  This can involve using refs, hooks (in React frameworks), or other mechanisms to re-render the component effectively, forcing Tailwind to re-evaluate the styles.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the development server (e.g., `npm run dev` for Next.js).
4. Observe the behavior of the components as demonstrated in `bug.js` and `bugSolution.js`.

## Note
This issue highlights the importance of understanding how SSR interacts with client-side updates when using Tailwind CSS. Careful consideration of re-rendering strategies or frameworks' specific features is necessary to avoid this problem.