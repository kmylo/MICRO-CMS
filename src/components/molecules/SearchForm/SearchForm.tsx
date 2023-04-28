import { useState } from "react";
// import { RiSearch2Line } from "react-icons/ri";
import Input from "../../atoms/Input";

type SearchFormProps = {
  onSubmit: (value: string) => void;
  labelText?: string;
  searchBtnCta?: string;
};

const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
  // labelText,
  searchBtnCta = "search"
}) => {
  const [value, setValue] = useState("");
  console.log({ value });

  const onChange = (event) => {
    console.log({ onchangeEv: event.target.value });
    setValue(event.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log({ evt });
    const input = evt.currentTarget.elements.namedItem(
      "search-input"
    ) as HTMLInputElement;
    console.log({ input });
    setValue(input?.value);
    onSubmit(input?.value);
  };

  return (
    <div className="search-form min-w-[380px] min2-w-full">
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* <label labelText={labelText} /> */}
        <div className="search-wrapper flex">
          <Input
            type="search"
            name="searchInput"
            id="searchInput"
            className="search-input"
            value={value}
            onChange={onChange}
          />
          <button
            type="submit"
            className="btn btn-secondary btn-sm rounded-s-none pt-3.5 pb-2.5 h-full"
          >
            {searchBtnCta}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
