import axios from "axios";

const prefixUrl = " https://hacker-news.firebaseio.com/v0/";
const storiesId = `${prefixUrl}newstories.json`;
const story = `${prefixUrl}item/`;

export const storyIds = async () => {
  const result = await axios.get(storiesId);
  return result.data;
};

export const getstory = async (storyId) => {
  const result = await axios.get(`${story + storyId}.json`);
  return result.data;
};
