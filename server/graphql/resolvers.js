import { apps, reviews, users } from '../database';

export default {
  Query: {
    applications: () => apps,
    reviews: () => reviews,
  },
  Application: {
    authors: (app) => {
      return users.filter(user => app.authors.includes(user.id));
    },
    reviews: (app) => {
      return reviews.filter(review => review.applicationId === app.id);
    },
  },
  Review: {
    author: (review) => {
      return users.find(user => user.id === review.author);
    },
    application: (review) => {
      return apps.find(app => app.id === review.applicationId);
    },
  },
  User: {
    reviews: (user) => {
      return reviews.filter(review => review.author === user.id);
    },
  },
};
