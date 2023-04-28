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

const SearchPosts = () => {
  const navigate = useNavigate();

  const { posts } = usePosts();
  const [query, setQuery] = useState("");

  let disabledBtn = query.length < 1;
  const filteredData = useMemo(
    () => filterByFields(query, posts, fields),
    [posts, query]
  );

  const onChange = (event) => {
    // setQuery(event.target.value.trim());
    setQuery(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setQuery(searchTerm);
  };
  const handleSearch = () => {
    onSearch(query);

    const postKeyNav = "title";

    const currentPost = posts.find((post) => query === post[postKeyNav]);

    if (currentPost) {
      disabledBtn = false;
      navigate(`${basePostRoute}${currentPost?.title}`);
    }
    setQuery("");
  };
  const handleOptionsClick = (option) => onSearch(option[dataKey]);

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
