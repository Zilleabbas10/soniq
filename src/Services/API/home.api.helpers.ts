import {HomeApiHandlers} from '.';
import {CommonHelpers} from '..';

const getData = async () => {
  const postsResponse = await HomeApiHandlers.getPosts();
  const formattedPosts = CommonHelpers.getFormattedPosts(
    postsResponse.data || [],
  );
  return formattedPosts;
};

export default {
  getData,
};
