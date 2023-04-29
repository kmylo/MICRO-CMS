import { useEffect, useState } from "react";
import { usePostsContext } from "../context/PostsContext";
import { getPosts } from "../services/api";
import { IPost } from "../types";

const usePosts = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { posts, setPosts } = usePostsContext();

  const handleUpdatePosts = (data: IPost[]) => {
    return setPosts(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (posts?.length > 0) return;
      getPosts()
        .then((data) => {
          setIsLoaded(true);
          setPosts(data);
        })
        .catch((e) => {
          console.log(e);
          setIsLoaded(true);
          setError(error);
        })
        .finally(() => {
          setIsLoaded(false);
        });
    };
    fetchData();
  }, [error, posts.length, setPosts]);

  return { isLoaded, error, posts, handleUpdatePosts };
};

export default usePosts;
