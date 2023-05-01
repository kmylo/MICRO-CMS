import { IPost } from "../types";
import { randomDate } from "../utils";
import blogData from "../utils/mock_data";

export const createPost = (initialState: IPost[], newPost: IPost, handler) => {
  newPost.createdAt = randomDate();
  const newState = [...initialState, newPost];
  handler(newState);
};

export const getPosts = async (): Promise<IPost[]> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(blogData.posts);
    }, 200)
  );

export const updatePosts = (initialState: IPost[], updatedPost, handler) => {
  const newState = initialState.map((currPost) => {
    if (currPost.id === updatedPost.id) {
      const res = { ...currPost, ...updatedPost };
      return res;
    }
    return currPost;
  });
  handler(newState);
};
