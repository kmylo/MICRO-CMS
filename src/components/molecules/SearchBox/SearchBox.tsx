import { RiSearch2Line } from "react-icons/ri";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";

const SearchBox = ({
  btnTxt = "Search",
  disabledBtn,
  handleSearch,
  onChange,
  placeholder = "ENTER THE KEYWORD",
  value
}): JSX.Element => {
  return (
    <div className="sm:px-4">
      <Label labelText="Search Posts" />
      <div className="search-wrapper flex">
        <div className="search-control-group w-full relative">
          <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
          <input
            autoComplete="off"
            name="searchBox"
            type="search"
            role="search"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="search-input bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg2 text-gray-300 outline-none"
          />
        </div>
        <Button
          variant="secondary"
          className=" btn-sm rounded-s-none pt-3.5 pb-2.5 h-full"
          onClick={handleSearch}
          disabled={disabledBtn}
        >
          {btnTxt}
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
