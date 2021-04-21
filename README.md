# Project Description

This project uses the Sentiment Analysis API from MeaningCloud to perform Natural Language Processing (NLP) on whatever
URL the user enters into the form. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

The goal of this project is to practice the following:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Installation

In order to run this project, complete the following steps:

- clone the repo onto your machine
- cd into the root of the project directory
- run npm install to install all dependencies
- run 'npm run build-prod' to compile the code
- run 'npm run start' to start up the server
- navigate to http://localhost:8081/ to interact with the web app

## Development Steps

### Initial Setup
Complete the following steps to get up and running:
- Install webpack and webpack-cli
- Create a webpack config file (webpack.config.js)
- Add require statements and module exports to the config file
- Add a new webpack npm script to package.json
- Specify a custom webpack entry point
- Setup babel (install babel, create .babelrc (config file), setup babel loader)
- Add import/export statements to JS files
- Install HtmlWebPackPlugin
- Create Development & Production modes (create two separate config files)
- Install Webpack Dev Server
- Install Clean Webpack Plugin  
- Convert CSS files to SCSS
- Install Sass Loaders
- Add Sass to rules array
- Import Scss files into index.js
- Add output to webpack config files
- In index.js, export JS to Client library
- Update all JS function references to include Client library
- Change the port # in the fetch request in the JS function
- Change the port # in server/index.js to match the port # from the previous step
- Setup webpack for production (optimize/minify)

### Setting up the MeaningCloud API

#### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/sentiment-analysis) and create an account with MeaningCloud to receive an API key..

#### Step 4: Environment Variables
Declare your API key, which will look something like this:
```
var textapi = new MeaningCloud({
  application_key: "your-key"
});

```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```
var textapi = new MeaningCloud({
  key: "process.env.API_KEY"
});
```

#### Step 5: Using the API

- Once the user submits the URL, send it through the URL Checker
- If a valid URL was submitted, send a post request from the client to the server with the URL
- Send a post request from the server to the API (using node-fetch & cors)
- Update index.html with the API result

### Setting up Jest
Jest is a framework for testing JavaScript projects. Jest is used in this project to write tests to check if the functions authored in src/client/js are behaving as anticipated.

Complete the following steps to get Jest up and running:
- Install jest using npm
- Write custom tests in testFormHandler.spec.js & testURLChecker.spec.js
- Configure an npm script named "test" in package.json to run tests from the command line
- Run "npm run test" to test

### Setting up Service Workers
Complete the following steps to get Service Workers up and running:
- Install the plugin (workbox-webpack-plugin) on the command line using npm
- Require & instantiate the plugin in webpack.prod.js
- Register a service worker in src/client/views/index.html
