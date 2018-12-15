# heig labs
A web app for reviewing students projects

This project includes a frontend bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) and a backend written in Node.js with full ES6 support, thanks to babel and webpack.

During development the server and the client run concurrently. This is required because the client use its own development server in order to have faster builds and hot reload. In production the client is built as static app and served by the express server.

## Running the app locally

### 1. Install project dependencies

Use the following command to install server and client packages

```sh
yarn install
cd client && yarn install
```

### 2. Run the app

Run the following command to start both the client and the server

```
yarn start
```

