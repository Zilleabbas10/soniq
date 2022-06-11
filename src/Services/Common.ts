import {postType} from '../types';

/**
 * Parses Post object to its own format and return a new object
 *
 * @param {*} news
 * @returns
 */
const formatPost = ({id, title, body}: postType) => {
  return {
    id: id || '',
    title: title || '',
    body: body || '',
  };
};

/**
 * Parses response from the endpoint.GET_POSTS and returns formatted posts
 *
 * @param {*} response
 * @returns
 */
const getFormattedPosts = (posts = []) => {
  return posts.map(post => formatPost(post));
};

export default {
  getFormattedPosts,
};
