# Funda Frontend Assignment
Welcome to my Funda assignment application!

## Tech stack
- Nuxt 4
- TypeScript
- CSS: Plain CSS chosen intentionally to demonstrate understanding of core styling principles without relying on frameworks.

## Pages
The application consists of 2 pages:

- Listing page
- Detail page

Those pages both make use of SSR, and are both being cached.

## Data fetching
For data fetching I use Nuxt server routes. Chosen to:
- Prevent exposing API key on client
- Caching (the api routes are cached with SWR)
- Centralize data fetching logic.

## Components
I like to decouple my UI components from API data. The components receive data via props rather than fetching themselves. This makes them:
- More reusable
- Easier to test

For this assignment I just put them all in the `components` folder. In larger apps these would be further organized by domain or feature. Or in a seperate UI layer.

## Styling
Styling is done with CSS. I kept the UI pretty minimal but ensuring responsiveness.

## Map integration
For the map integration I have chosen Leaflet. Other options I considered were Google or Mapbox. But with Leaflet I didn't have to make an account or provide credit card details.

## Swiper
The photo gallery uses SwiperJS, a well maintained and widely used library for sliders and carousels. This allowed me to make a solution within the time constraints of the assignment

## Local setup instructions
1. Create a .env file in the root (copy .env.example) and fill in the values for the variables.
  - apiBase -> the base url (ending with .nl)

2. Install dependencies:
```bash
npm install
```

3.  Run local dev server:
```bash
npm run dev
```

The local dev server will start on `http://localhost:3000/`

## Deployed on Vercel
The app has been doployed with Vercel:

https://homes-listings.vercel.app/

## Possible improvements
With more time, I would have made the following improvements
- Improve image loading performance by using `srcset` and `sizes` to serve the right sizes based on screen size. 
- Improving error handling and API setup.
- Improved components folder structure
- Add Storybook for UI documentation
- Add unit tests (especially if more business logic were present)
- Split up the UI in more reusable components.
