# Crypto Price Feed Using Nomics & GraphQL

This is source code for the tutorial written [here](https://medium.com/tokensoft).  

It was made possible by several open-source tools.  
Some of these include:
* [axios](https://github.com/axios/axios), promise based HTTP client for the browser and node.js
* [backpack](https://github.com/jaredpalmer/backpack), minimalist Node.js build system
* [memoizee](https://github.com/medikoo/memoizee), complete memoize/cache solution for JavaScript
* [graphql-yoga](https://github.com/prisma/graphql-yoga), fully-featured GraphQL Server with focus on easy setup

## Installation
Use npm to install dependencies:  
`$ npm install`

## Demo & Playground UI
To run the GraphQL server locally and inspect the playground UI:  
`$ npm run dev`  
Then visit [localhost:4000](http://localhost:4000) in your browser.

## Building
Use backpack to create your bundle.  
`$ npm run build`

## Running in Production
Use backpack to run in production.  
`$ npm run start`