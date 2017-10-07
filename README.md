The foundations of this solution were created using https://www.npmjs.com/package/generator-angular-es6-webpack, which creates all the base files for an Angular 1.5 app, with ES6, SCSS support.

Angular was chosen first because of my familiarity/knowledge of the framework, but also because:
 - Easy for single-page applications
 - Easy to implement live updates (e.g. update shopping cart dynamically)
 - Easy to unit test
 - Modular architecture

## Getting started
 - Make sure you have got `node` and `npm` installed. Note: version 7 was used for this. You can change the node version easily by installing `nvm` (node virtual machine).
 - `cd` into the folder and run `npm install`
   - *Note:* if you installed `nvm`, then run `nvm install 7`, and then `nvm use 7`

## Running App
 - Run `gulp serve` and access `http://127.0.0.1:9001/`

## Running Unit Tests
 - Run `gulp build` and then `gulp karma`
