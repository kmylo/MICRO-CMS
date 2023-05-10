import { useEffect, useState } from "react";
import { usePostsContext } from "../context/PostsContext";
import { getPosts } from "../services/api";
import { IPost } from "../types";

const usePosts = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { posts, setPosts } = usePostsContext();

  const handleUpdatePosts = (data: IPost[]): void => {
    setPosts(data);
  };

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();
    const fetchData = async (): Promise<void> => {
      if (posts?.length > 0) return;
      try {
        const data = await getPosts(abortController.signal);
        if (isMounted) {
          setIsLoaded(true);
          setPosts(data);
        }
      } catch (e) {
        console.log(e);
        if (isMounted) {
          setIsLoaded(true);
          setError(e as Error);
        }
      } finally {
        if (isMounted) {
          setIsLoaded(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [posts.length, setPosts]);

  return { isLoaded, error, posts, handleUpdatePosts };
};

export default usePosts;
