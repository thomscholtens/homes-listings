# Funda Frontend Assignment
Welcome to my Funda assignment application!

This application is built with Nuxt 4. I kept it quite basic.

## Pages
The application consists of 2 pages:

- Listing page
- Detail page

Those pages both make use of SSR.

## Data fetching
For data fetching I use Nuxt server to make the application more secure. This way the API key is not exposed client side.

## Components
I like to decouple my UI components from API data, to make them more reusable. The data is passed with props. For this assignment I put them in the components folder. Ofcourse in larger apps this wouldn't scale well. Then they could be grouped by domain or come from an UI layer.

## Styling
I used good old plain CSS for this assignment, becuase after all CSS is the fundation for all styling frameworks. I kept the styling very minimal but made sure the app is responsive.

## Map integration
For the map integration I use Leaflet. Other options I considered were Google or Mapbox. But with Leaflet I didn't have to make an account or provide credit card details.

## Local setup instructions

1. Create a .env file in the root (copy .env.example) and fill in the values for the variables.

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
