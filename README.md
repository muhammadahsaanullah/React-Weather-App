🌦 Weather Forecast App

A simple React-based weather application that shows the current weather and 5-day forecast for any city using the OpenWeatherMap API.

🚀 Features

Search weather by city name

Displays:

Current temperature

Weather conditions

Humidity

Wind speed


5-day weather forecast (one update per day)

Responsive and user-friendly UI


📸 Preview

<img width="871" height="727" alt="image" src="https://github.com/user-attachments/assets/0f97966a-d473-4193-8331-9d36b1267833" />


🛠 Tech Stack

React (Hooks: useState, useEffect)

OpenWeatherMap API

HTML/CSS


📦 Installation

1. Clone the repository

git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app


2. Install dependencies

npm install


3. Start the development server

npm start



🔐 API Key

This app uses the OpenWeatherMap API. You need an API key to fetch weather data.

1. Sign up at OpenWeatherMap.


2. Replace the API key in App.js:

const apiKey = "YOUR_API_KEY_HERE";

> ⚠ Important: Never expose your API key in production apps.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
