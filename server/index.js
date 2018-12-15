// loads environment variables
import 'dotenv/config';
import path from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();
const port = process.env.PORT || 5000;
const CLIENT_PATH = path.join(__dirname, '..', 'client', 'build');

// Serve static assets only in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(CLIENT_PATH));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Enables playground and introspection in production
  introspection: true,
  playground: true,
});


server.applyMiddleware({ app });

// Serve single page app only in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(CLIENT_PATH, 'index.html'));
  });
}

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
