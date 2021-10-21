# Weather-Journal App Project

## Project Description

This project required me to create an asynchronous web app that uses Web API and user data to dynamically update the UI. The API that was used for this app is the <a href="https://openweathermap.org/current">Open Weather Data API</a>.

## Usage

To use the app, you are required to have nodejs on your desktop, as this file runs express. In the file's terminal, you'll have to run 
```
node server.js
```

This will give you the localhost number which should be: 8000. In your browser, while the terminal is running, enter 
```
localhost:8000/index.html
```

It should display this:

<img src="https://user-images.githubusercontent.com/86360050/133074032-9c4e7041-ba25-46b4-9551-b607f20336c9.png" alt="screenshot of the weather journal app">

When you enter the zip code (US only) and your feelings, that data should be held onto the server. And when you generate another entry, the latest entry which was previously inputted, should be displayed under "Most Recent Entry". 

## Starter Code

I used a starter code provided by Udacity - <a href="https://github.com/udacity/fend/tree/refresh-2019" target="_blank">Link to the starter code</a>

This starter project has some HTML and CSS styling to display a static version of the Weather Journal App and some pre-written Javascript to get me started.
