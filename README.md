# Chatbot for Facebook Messager with NodeJS and Dialogflow

## Description
Always feel free to open an issue to
[Bottender](https://github.com/Yoctol/bottender/issues) repository.

## Table of Contents (Optional)

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Installation

```sh
npm install
```

## Configuration

- Create .env file
- Create [Dialogflow Project](https://dialogflow.cloud.google.com/) on Google Cloud and connect to service account
- Create Facebook App
- Configure ENV value
- Migrate database

### Migration Database

You can migrate database with
```
npm run migrate
```

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

## Usage

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

---

## How to Contribute

To contribute to this repository, please follow [Contribution Guide](contributing.md).

## Deployment

Deployment is done in an automatic via GitHub Actions. Please refer to [ci-cd.md](ci-cd.md) for more details.
