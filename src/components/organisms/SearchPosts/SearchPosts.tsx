import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBox from "../../molecules/SearchBox";
import SearchOptions from "../../molecules/SearchOptions";

import usePosts from "../../../hooks/usePosts";
import { PostKeys } from "../../../types";
import { filterByFields } from "../../../utils";
import { basePostRoute } from "../../../utils/constants";

const dataKey = PostKeys.TITLE;
const fields = [dataKey];
const btnTxt = "Search";
const postKeyNav = "title";

const useSearchPosts = () => {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const [query, setQuery] = useState("");

  const dataKey = PostKeys.TITLE;
  const fields = [dataKey];

  const filteredData = useMemo(
    () => filterByFields(query, posts, fields),
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

const SearchPosts = () => {
  const { filteredData, handleOptionsClick, handleSearch, onChange, query } =
    useSearchPosts();

  const disabledBtn = query.length < 1;

  const searchOptions = {
    searchData: filteredData,
    dataRenderField: dataKey,
    onClick: handleOptionsClick
  };

  return (
    <div className="search-form min-w-[380px] min2-w-full flex flex-col relative">
      <SearchBox
        {...{
          btnTxt,
          disabledBtn,
          handleSearch,
          onChange,
          value: query
        }}
      />
      <div style={{ position: "absolute", top: 70, width: "100%", zIndex: 3 }}>
        <SearchOptions {...searchOptions} />
      </div>
    </div>
  );
};

export default SearchPosts;
