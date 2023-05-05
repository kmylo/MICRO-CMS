import SearchBox from "../../molecules/SearchBox";
import SearchOptions from "../../molecules/SearchOptions";
import useSearchPosts from "../../../hooks/useSearchPosts";

import { btnSearchTxt, dataKey } from "../../../utils/constants";

const SearchPosts = () => {
  const {
    filteredData,
    handleOptionsClick,
    handleSearch,
    onChange,
    query,
    selectedPost
  } = useSearchPosts();

  const disabledBtn = !selectedPost;
  const searchOptions = {
    searchData: filteredData,
    dataRenderField: dataKey,
    onClick: handleOptionsClick
  };

  return (
    <div className="search-form min-w-[380px] min2-w-full flex flex-col relative">
      <SearchBox
        {...{
          btnTxt: btnSearchTxt,
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
