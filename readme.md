<h1 align="center"> Sahtel++</h1>


This project is the web client for Sahtel++. Connects to the [Sahtel++ API](https://github.com/Swackles/sahtelPlusPlsus-API)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need fallowing software to run the program
* [node.js](https://nodejs.org/en/)

### Installing

First off you need to get the git repository
```
https://github.com/Swackles/sahtelPlusPlus-web.git
```
After you have the git repository now in the command line enter the project folder. Now that you're in the project folder and have project installed you also need to install all of the dependencies. This can be done by using `npm  install` command. 

Now that you have all the dependencies for the project downloaded as well you need to run it. one way is to run `node app.js` command but I highly reccomend using [nodemon](https://www.npmjs.com/package/nodemon).

You know that the application is running if you get message like this:
```
App started on port: <port>
```
Now going to your browser and into the address bar entering `localhost:<port>` you'll be taken to the index page of the application.

## Built With

* [node.js](https://nodejs.org/en/) - Javascript runtime engine
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Express](https://www.npmjs.com/package/express) - The web framework used
* [Config](https://www.npmjs.com/package/config) - Used to get data from config file
* [Pug](https://pugjs.org/api/getting-started.html) - Template engine

## Further reading
* [API endpoints](https://github.com/Swackles/sahtelPlusPlus-web/blob/master/api.md)