import { useEffect, useState } from "react";
import { usePostsContext } from "../context/PostsContext";
import { getPosts } from "../services/api";
import { IPost } from "../types";

const usePosts = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { posts, setPosts } = usePostsContext();

  const handleUpdatePosts = ({ data }: { data: IPost[] }) => {
    return setPosts(data);
  };

  useEffect(() => {
    const fetchData = async () => {
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
  }, []);

  return { isLoaded, error, posts, handleUpdatePosts };
};

export default usePosts;
