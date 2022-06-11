import {HomeApiHandlers} from '.';
import {CommonHelpers} from '..';
import {Story} from '../../types';

const getData = async () => {
  const postsResponse = await HomeApiHandlers.getPosts();
  const formattedPosts = CommonHelpers.getFormattedPosts(
    postsResponse.data || [],
  );
  return formattedPosts;
};

const hackerNewsBaseUrl = 'https://hacker-news.firebaseio.com';

const fetchLast5Stories = async (): Promise<Story[]> => {
  try {
    const response = await fetch(`${hackerNewsBaseUrl}/v0/newstories.json`, {
      mode: 'cors',
    });
    const storyIds = (await response.json()) as number[];

    const storyPromises = storyIds
      .slice(0, 5)
      .map(storyId =>
        fetch(`${hackerNewsBaseUrl}/v0/item/${storyId}.json`, {mode: 'cors'}),
      );
    const storyResponses = await Promise.all(storyPromises);

    return (await Promise.all(
      storyResponses.map(storyResponse => storyResponse.json()),
    )) as Story[];
  } catch (e) {
    throw new Error(`Unable to fetch stories: ${e}`);
  }
};

export default {
  getData,
  fetchLast5Stories,
};
