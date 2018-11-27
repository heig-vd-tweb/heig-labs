// loads environment variables
import 'dotenv/config';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
const port = process.env.PORT || 5000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// eslint-disable-next-line no-unused-vars
app.get('/', (req, res, next) => {
  res.send('Hello express!');
});

// Forward 404 to error handler
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${port}`);
});
