import {Verb} from '../constants/verb';

export const endPoints = {
  home: {
    images: {
      path: 'https://jsonplaceholder.typicode.com/photos',
      verb: Verb.GET,
    },
    users: {
      path: 'https://jsonplaceholder.typicode.com/users',
      verb: Verb.GET,
    },
  },
  comments: {
    path: 'https://jsonplaceholder.typicode.com/comments',
    verb: Verb.GET,
  },
  posts: {
    path: 'https://jsonplaceholder.typicode.com/posts',
    verb: Verb.GET,
  },
};
