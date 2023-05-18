import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IPost } from "../types";

export type ContextProviderProps = { children: ReactNode };

interface PostsContextValue {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

const initState: PostsContextValue = {
  posts: [] as IPost[],
  setPosts: (() => ({})) as React.Dispatch<React.SetStateAction<IPost[]>>
};

const PostsContext = createContext<PostsContextValue>(initState);
PostsContext.displayName = "Posts";

const PostsContextProvider = ({ children }: ContextProviderProps) => {
  const [posts, setPosts] = useLocalStorage("posts", initState.posts);

  const postsContextValue = useMemo(
    () => ({ posts, setPosts }),
    [posts, setPosts]
  );

  return (
    <PostsContext.Provider value={postsContextValue}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

export { PostsContextProvider, usePostsContext };
