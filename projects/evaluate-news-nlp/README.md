# Motivations

The motive of this project is to demonstrate webpacks, automated testing with jest and others in Udacity Frontend developer cource.

# Project Instructions

This repo is my starter code for the project. 
It was the same as the starter code we began with in lesson 2. 
Follow the instructions in this readme to make it work in your environment.

## Getting started

It would probably be good to first get your basic project setup and functioning.

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
1. Fill the .env file with your API keys like this:
```
API_KEY=**************************
```

Note: MeaningCloud only needs API key. .env file is ignored when you commit with git.

If you see status code 100 (msg: "Operation denied") in the result on the page while testing, check if you set the key correctly.


## Unit Testing

To run tests with jest, run the following commands in the project directory.
```bash
npm test
```
or
```
npm run test
```

Note: 
- Test files are in ```__tests__``` directory to follow Jest spec, not in ```__test__```.
- Make sure local servers are not running, otherwise tests may fail due to port conflicts.

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

### Build Production Files

You build production files by running following commands.
```
npm run build-prod
```
After building the production files, you can run a local server (```npm start```) and open "http://localhost:8081/" with your browser.

## Interactions (Functional testing)

You can input a valid URL on the form, otherwise you will see an error message. With a valid URL, you will see a response from MeaningCloud API.

Please note that the MeaningCloud evaluates all of the content in the webpage, including not only documents but also other contents.
