# API Testing - Cypress

[![Actions Status](https://github.com/murillowelsi/cypress-api-testing/workflows/Cypress%20CI/badge.svg)](https://github.com/{user}/{repo}/actions)
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

This project was created to study and define a base architecture for automated tests of API Rest with [Cypress](https://www.cypress.io/).

## How to install

- Install [Node.js](https://nodejs.org/en/download/);
- Download this repository or make a git clone;
- Open the project directory and execute the command:
       - `npm install`
- To open the Cypress execution interface, execute in the project directory:
       - `npm run cypress:open`

### Project Architecture

```JS
cypress-api-testing/
  ├─  cypress/
  │        │
  │        ├── fixtures/
  │        │   ├── *.json
  │        │   ├── *.csv       
  │        │   └── *.png
  │        │
  │        ├── integration/
  │        │   ├── <category>/
  │        │   │   └── <requests>Tests.request.js
  │        │   │   └── <tests>Tests.spec.js
  │        │   └── <category2>/
  │        │       └── <requests>Tests.requests.js
  │        │       └── <tests>Tests.spec.js  
  │        │
  │        ├── plugins/
  │        │   └── index.js
  │        │
  │        ├── reports/
  │        │   └── mocha/
  │        │         └── mochafiles (*.json, *html)
  │        │
  │        └── support/
  │            ├── databaseCommands.js
  │            ├── apiGeneralCommands.js
  │            ├── api<Categoria>Commands.js
  │            ├── api<Categoria2>Commands.js
  │            └── index.js
  │           
  │ 
  ├── environmentsConfig/
  ├── node_modules/
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```
