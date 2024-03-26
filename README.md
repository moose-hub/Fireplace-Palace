This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Plan

- Move the components and assets folders over
  - Make a sub folder for the assets per page
- Move the main App component over the root page
  - Extract the layout
- Move the main/global CSS
- Rectify the paths
- Switch img/picture tags for Next.js Image component
- Do the Founders page
- make a new directory
- include page and css
- include import adn export statements
- make the page
  - can we reuse any previous components?
  - page can reuse the same header and footer as in the layout.
  - hero image and desc to be updated
  - cards have the same title, image adn desc but image and desc need reordering
- Complete the nav
- put this in the header

## Plan for Hackathon

- Basic component to add in the reviews
- new component with .jsx and .css
- call that component from the home page
- include import and exports
- buttons component will be:
  - three buttons
  - one per country (england, wales, scotland)
  - title(trusted)
  - desc(click this to see reviews)
- review component:
  - review text
  - review author

- add state

  - useState hook for country
  - initialise it as nothing
    - once each is clicked, remove the state from the others with a function
  - useState hook for review
  - initialise it as nothing
  - remember the review once button is clicked

- add effect

  - useEffect hook
  - fetch data from Loz's API
    - investigate that API to see it's docs (general)
    - add query paramter with each country
  - have useEffect depend on the country state

- review progress and assess stretch goals
  - make new plan for each stretch goal identified

## Stretch Goals

- Remove the useEffect for fetching from the API and replace it with useSWR

  - import SWR
  - set the path to the API using fetcher
  - determine what to return from that
  - ensure the error and laoding statements are added in
  - check new output against previous output to preserve all functionality

- Try and make the page more real life-like
  - automatic review loaded depending on your location
  - fixed size review box so we don't keep changing the size of the page


## Booking Page Plan

Users should see a link on the home page saying "Book Consultation", they should not see the phone number anymore.
Users should be able to click the link and go to a "Design Booking" page ("/booking")
- When a user reaches the "Design Booking" page they should see a simple form that matches the designs you've been given.
When a user submits the form it should validate that no fields are empty. 
If there is an empty form field show an error.
If there is no error then console log the form data 🙂 (don't worry about posting the data anywhere).

# Form

Write all of the form in one "ContactForm" component.
Get it looking how it should first (JSX and CSS).
Then try to create state for a field (or be more ambitious and try making state that is an object - manage all fields)
Connect onChange events on the form fields to handlers (or a handler) that updates state.
Make sure the state is tied back to the form fields (values attribute)
Handle the onSubmit of the form (don't forget about preventing the default behaviour). 
Once you it's all connected think about validation. You are already capturing the the onSubmit - maybe do something there 🙂.