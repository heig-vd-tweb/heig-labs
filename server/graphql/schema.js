import { gql } from 'apollo-server-express';
/**
 * Graphql Schema definition
 */
export default gql`
  type Application {
    id: ID!,
    name: String,
    description: String,
    authors: [User],
    reviews: [Review],
    score: Int!  
  }

  type User {    
    id: ID!
    name: String!
    reviews: [Review]
  }

  type Review {
    id: ID!
    stars: Int!
    author: User!
    comment: String,
    application: Application,
  }

  type Query {
    # Get all applications
    applications: [Application],
    reviews: [Review],
  }
`;
