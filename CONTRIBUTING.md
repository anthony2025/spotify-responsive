## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.
[Yarn](http://yarnpkg.com) or npm.

## Installation

- Running `yarn` in the app's root directory will install everything you need for development.

## Development Server

- `yarn start` will run the app's development server at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Running Tests

- `yarn test` will run the tests once.

- `yarn run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `yarn run test:watch` will run the tests on every change.

## Building

- `yarn run build` creates a production build by default.

   To create a development build, set the `NODE_ENV` environment variable to `development` while running this command.

- `yarn run clean` will delete built resources.
