# weMove-client

This repo contains the React Native app for weMove. As of v.1.0 the app is still Expo-based and not yet detached.

## weMove

weMove was a prototype of a mobile app delivering a man-in-a-van ridesharing service. Think Uber for pickup trucks and moving vans, enabling users to connect with local drivers who can get their cargo from A to B.

Drivers set base rates, per-mile prices and profile pictures on signup. Users can log into the platform, input a destination and select from the closest drivers to their current location across four vehicle tiers: pickup trucks, cargo vans, box trucks and moving vans. The app takes care of geolocating both parties, calculating mileage and pricing, and handling requests between users and drivers. At the end of a trip, users can rate their drivers on a scale from 1-5 stars.

The backend of the app is viewable [here](https://github.com/CT-WeMove/weMove).

## Running the app

  1. Obtain a secrets.js file from a CT-weMove member containing the proper keys for the third-party integrations -- the app will not work without them.
  2. Open the top-level directory of this repo as a Project in Expo, using the XDE or CLI tools
  3. Enjoy. Note that geolocation and selfie-taking capabilities work best on an actual phone vs a device simulator.

made with <3 at Cornell Tech by [Emily Tseng](https://github.com/emtseng), [Luke Ahn](https://github.com/lukeahn) and [Marco White](https://github.com/mwhite494)

