# Weather App

A simple weather application built with **Vite** and **React**. This app allows users to search for weather information based on location, displaying current weather conditions, humidity, wind speed, and more. The app also features a toggle to switch between Celsius and Fahrenheit for temperature display.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Information](#api-information)
6. [License](#license)

## Features

- Search for weather information by city name.
- Displays current temperature, humidity, and wind speed.
- Toggle between Celsius and Fahrenheit for temperature units.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **Vite** - A modern build tool that provides a faster and leaner development experience.
- **OpenWeather API** - Provides weather data for the specified location.
- **CSS** - For styling the application.

## Installation

1. **Clone the repository**:

```bash
   git clone https://github.com/your-username/weather-app.git
```

2. Navigate to the project directory:

```bash
   cd weather-app
```

3.Install dependencies:

```bash
    npm install
```

4. Create a .env file in the root of the project and add your OpenWeather API key:
   VITE_API_KEY=your_openweather_api_key

# API Information

This app uses the OpenWeather API to fetch weather data. You'll need to sign up for an account and get an API key to use the application.

## API Endpoints

### Current Weather Data:

```bash
GET https://api.openweathermap.org/data/2.5/weather?q={city name}&units={metric/imperial}&appid={API key}
```

# License

This project is licensed under the MIT License - see the LICENSE file for details.

# Instructions to Customize

- Replace `your-username` in the cloning command with your actual GitHub username or the URL for your repository.
- Add your actual OpenWeather API key where it says `your_openweather_api_key` in the `.env` file section.
- Feel free to add any additional features, known issues, or future improvements that might be relevant to your project.

```

```
