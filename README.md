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
- [Deployment](#deployment)

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
    git clone https://github.com/obaidshah345/expo-talkton.git
    cd expo-talkton
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
    npx expo start
    ```

2. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or browser.

## Deployment

To deploy the Talkton mobile application built with Expo, we have a couple of options depending on your target platform: Android, iOS, or both. The process involves building the application and then distributing it via the app stores. Here’s a step-by-step guide for deploying the app using Expo’s managed workflow.

### 1. Prerequisites

- Ensure you have an Expo account. If not, create one at [Expo.io](https://expo.io/).

### 2. Building the App

#### For Android

1. **Install EAS CLI**:
    ```sh
    npm install -g eas-cli
    ```

1. **Login to Expo CLI**:
    ```sh
    eas login
    ```

2. **Build the Android App**:
    ```sh
    eas build:android
    ```

3. **Choose the Build Type**:
    - You can choose between an APK (standard Android app package) or an AAB (Android App Bundle, preferred for Google Play Store).

4. **Wait for the Build**:
    - Expo will start the build process. You can follow the progress in the terminal or online on the Expo website.
    - Once the build is complete, you will get a link to download the APK or AAB file.

#### For iOS

1. **Ensure You Have an Apple Developer Account**:
    - You need to be part of the Apple Developer Program to publish to the App Store.

2. **Build the iOS App**:
    ```sh
    expo build:ios
    ```

3. **Choose the Build Type**:
    - You can choose between a simulator build (for testing on iOS simulators) or an archive build (for distribution).

4. **Wait for the Build**:
    - Expo will start the build process. You can follow the progress in the terminal or online on the Expo website.
    - Once the build is complete, you will get a link to download the `.ipa` file.

### 3. Distributing the App

#### For Android

1. **Upload the APK/AAB to Google Play Console**:
    - Go to the [Google Play Console](https://play.google.com/apps/publish/).
    - Create a new application and fill in the necessary details.
    - Upload the APK or AAB file you got from Expo.
    - Follow the steps to complete the store listing, content rating, and pricing & distribution.
    - Review and roll out the release to the production track.

#### For iOS

1. **Upload the IPA to App Store Connect**:
    - You can use Transporter (a macOS app) or Application Loader (part of Xcode) to upload your `.ipa` file to App Store         Connect.
    - Go to [App Store Connect](https://appstoreconnect.apple.com/).
    - Create a new app and fill in the necessary details.
    - Upload the `.ipa` file using Transporter or Xcode.
    - Follow the steps to complete the store listing, content rating, and pricing & distribution.
    - Submit your app for review.
