**To set up an application which enables the user to view and manage shipments.**

## Business need

The main goal is for the user to check the shipments at a glance. This allows users to take faster decisions and plan ahead of time.

Providing information to the customer increases transparency and reduces communication issues.

## Use cases

- The user shall be able to see shipments in pages of 20 elements per page.
- The user shall be able to search for shipment id and sort by different fields.
- The user shall be able to see the shipment information on a shipment details page.
- The user shall be able to update the shipment name.

The interactions should not refresh the page.

## Technology requirements

You can use any libraries, task runners and build processors. **React** and **JavaScript** are the only hard requirements. ES6 and TypeScript are highly encouraged, as well as MST and MobX if needed.

**Submissions using view libraries/frameworks other than React will not be accepted.**

## Criteria

The full criteria for evaluating the coding challenge can be found [here](./Criteria.md).

## Server-side

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
yarn or npm install .
yarn start or npm start
```

Check [json-server](https://github.com/typicode/json-server) for more information.

**Make sure that there are scripts to start both the server and the client.**





