import { IPost } from "../types";
import blogData from "../utils/mock_data";

export const createPost = (
  initialState: IPost[],
  newPost: IPost,
  handler: (data: IPost[]) => void
) => {
  newPost.createdAt = new Date();
  const newState = [...initialState, newPost];
  handler(newState);
};

// export const getPosts = async (): Promise<IPost[]> =>
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(blogData.posts);
//     }, 200)
//   );

export const getPosts = async (signal: AbortSignal): Promise<IPost[]> => {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, 5000);
  });

  const fetchPosts = new Promise<IPost[]>((resolve) => {
    setTimeout(() => {
      resolve(blogData.posts);
    }, 200);
  });

  const result = await Promise.race([fetchPosts, timeout]);

  if (signal.aborted) {
    throw new Error("Request aborted");
  }

  return result;
};

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
