import { useNavigate } from "react-router-dom";
import usePosts from "./usePosts";
import { useMemo, useState } from "react";
import { filterByFields } from "../utils";
import { basePostRoute, dataKey, postFilterFields, postKeyNav } from "../utils/constants";

const useSearchPosts = () => {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const [query, setQuery] = useState("");

  const filteredData = useMemo(
    () => filterByFields(query, posts, postFilterFields),
    [posts, query]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onSearch = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  const handleSearch = () => {
    onSearch(query);
    const currentPost = posts.find((post) => query === post[postKeyNav]);
    if (currentPost) {
      navigate(`${basePostRoute}${currentPost?.title}`);
    }
    setQuery("");
  };

  const handleOptionsClick = (option: { [key: string]: any }) => {
    onSearch(option[dataKey]);
  };

  return {
    filteredData,
    handleOptionsClick,
    handleSearch,
    onChange,
    query
  };
};

export default useSearchPosts