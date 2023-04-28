import { IPost } from "../types";
import blogData from "../utils/mock_data";

export const getPosts = async (): Promise<IPost[]> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(blogData.posts);
    }, 200)
  );
