# React JS with Grunt [![Build Status](https://travis-ci.org/deepkt/ReactTraining.svg?branch=master)](https://travis-ci.org/deepkt/ReactTraining)


It uses Babel & Browserify to handle modules and compile them into plain clean Javascript, LESS for CSS.

## Installing
```js
npm install -g grunt-cli

npm install
```

## Running
```js
grunt
```
Once grunt build is successfull, navigate to following URL:

http://localhost:1337

## Building for production
```js
grunt build
```

## Running tests
```js
npm test
```

## Project structure

Put your JS code into  `src/js` directory. It will be automatically picked by `Grunt Watch` and bundeled into `dist` directory as `app.js`. Put all you `LESS` files into `src/less` and it will be compiled to `dist/styles.less`.

In order to create production ready build just run `grunt build` and change js src in `index.html` to point to `dist/app.min.js`.


##
Based on [grunt-react-boilerplate](https://github.com/padsbanger/grunt-react-boilerplate) on Github
