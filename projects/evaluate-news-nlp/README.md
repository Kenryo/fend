# Motivations

The motive of this project is to demonstrate webpacks, automated testing with jest and others in Udacity Frontend developer cource.

# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
```
npm install
```

## Setting up the API

This project uses [MeaningCloud's Sentinment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis) instead of Aylien API as Aylien doesn't offer and has disabled new account creation. 

### Environment Variables

In order to use the external MeaningCloud APIs, you need to setup the environmental variables. To set API key you can modifiy ```.env``` in the project. If you can't find the file, you can create a new one with your API keys. 

1. Create a new ```.env``` file in the root of your project
1. Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
1. Fill the .env file with your API keys like this:
```
API_KEY=**************************
```

Note: MeaningCloud only needs API key.

## Unit Testing

To run tests with jest, run the following commands in the project directory.
```bash
npm test
```
or
```
npm run test
```

Note: Test files are in ```__tests__``` directory to follow Jest spec, not in ```__test__```.

## Running Local Express Server

You may need to run a local server to 
With the folloing commands, you can run a local server.
```
npm start
```

Otherwise, the client may work with service worker without a local server.


### Development instance
npm will run a development node instance with port 8080 and launch a browser automatically. You may need to open another console to run the command while you are running the local server.
```
npm run build-dev
```

### Production instance

once you build the development
```
npm run build-prod
```

###


## Interactions (Functional testing)

You can input a valid URL on the form, otherwise you will see an error message. With a valid URL, you will see a response from MeanCloud API.

Please note that the MeanCloud evaluates all of the content in the webpage, including not only documents but also other contents.
