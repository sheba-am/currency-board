# Currency Board

A cryptocurrency price tracker built with Next.js, React.js, TypeScript, and Bootstrap.
This project uses the CoinGecko API to fetch real-time cryptocurrency data and display it in a user-friendly table with infinite scroll and detail views.

[Live Demo](https://graceful-paletas-f65941.netlify.app/
)




## Features

Real-time Data:
Fetches live cryptocurrency prices and market data via CoinGecko API.

Infinite Scroll:
Smooth infinite scrolling loads more currencies as you reach the bottom of the page.

Currency Detail Pop-up:
Clicking a currency opens a detail view for more information.

Responsive Design:
Built with Bootstrap 5 for seamless desktop and mobile experiences.

Persian Date Support:
Last updated timestamps are automatically converted to Persian calendar format.

Error Handling:
Graceful fallback for network errors and CoinGecko rate limits.




## Getting Started

### Installation

1. Clone the repository:

git clone https://github.com/your-username/currency-board.git
cd currency-board

2. Install dependencies:


`npm install`

3. Start the development server:

`npm run dev`

The app will be available at:

http://localhost:3000



## Project Structure

/components       → Reusable React components (Hero Section, Table)
/contexts         → React Context for global state management
/pages            → Next.js page routes (currencies list, dynamic detail page)
/utils            → Helper functions (e.g. date conversion)
/public           → Static assets



## Technologies Used

React.js

Next.js

TypeScript

Bootstrap 5

CoinGecko API

## Live Demo

https://graceful-paletas-f65941.netlify.app/





