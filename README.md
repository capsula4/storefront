
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
 - Run `gulp karma`

## Running Protactor Test (Selenium)
 - Run `./node_modules/webdriver-manager/bin/webdriver-manager update` to ensure you've got the latest version of the webdriver.
 - Run `./node_modules/webdriver-manager/bin/webdriver-manager start` to start the selenium server. Then on another terminal:
 - Run `gulp protractor` to run the actual tests. Remember that every time you open a new terminal you might need to run `nvm use 7`.

## Notes
If I had given more time to invest in the project, I would have:
 - Unit test everything. I only included one unit test for each kind of angular concept (controller, service, component).
 - More functional tests (E2E) using Protractor (Selenium for AngularJS). Would have added more assertions and tests for the cart page.
 - Although I tried to organize my CSS, it could be improved, e.g. put all animations inside `_animation.scss`
