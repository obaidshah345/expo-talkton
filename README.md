# Talkton Mobile App

Talkton is a mobile application built with React Native and Expo, designed to simulate a Twitter-like experience where users can view and like talks in real-time. 
The app communicates with a backend built using Node.js, Express, and Pusher for real-time updates.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Real-Time Updates with Pusher](#real-time-updates-with-pusher)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display a list of talks
- Like talks
- Real-time updates with Pusher

## Tech Stack

- **React Native**: JavaScript framework for building native mobile apps
- **Expo**: Framework and platform for universal React applications
- **Pusher**: Real-time notifications
- **Axios**: Promise-based HTTP client for making API requests
- **Tailwind CSS**: Utility-first CSS framework for styling


## Getting Started

### Prerequisites

- Node.js (>= 18.x)
- npm (>= 6.x)
- Expo CLI (>= 4.x)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/obaidshah345/talkton-mobile.git
    cd talkton-mobile
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Install Expo CLI if not already installed:
    ```sh
    npm install -g expo-cli
    ```

### Configuration

1. Add your environment variables to `app.json`:

   ```json
   {
     "expo": {
       "name": "Talkton",
       "slug": "talkton",
       "version": "1.0.0",
       "extra": {
         "API_BASE_URL": "http://localhost:3000",
         "PUSHER_APP_KEY": "your_pusher_key",
         "PUSHER_CLUSTER": "your_pusher_cluster"
       }
     }
   }

### Running the App

1. Start the Expo development server:
    ```sh
    expo start
    ```

2. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or browser.

### Real-Time Updates with Pusher

The app uses Pusher for real-time updates. When a talk is liked or unliked, the like count updates in real-time across all devices.

