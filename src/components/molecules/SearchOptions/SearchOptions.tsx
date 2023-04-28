interface SearchOptionsProps<T> {
  searchData: T[];
  dataRenderField: string;
  onClick: (item: T) => void;
}

const SearchOptions = <T extends Record<string, any>>({
  searchData,
  dataRenderField,
  onClick
}: SearchOptionsProps<T>) => {
  // const style = { backgroundColor: "#fff" };
  if (searchData?.length === 0) return null;
  return (
    <div
      className="dropdown flex flex-col border2 text-left py-3 bg-[#1F1D2B]"
      // style={style}
    >
      {searchData?.map((item, idx) => (
        <div
          onClick={() => onClick(item)}
          className="dropdown-row text-sm p-2 hover:bg-sky-700"
          key={idx}
        >
          {item[dataRenderField]}
        </div>
      ))}
    </div>
  );
};

export default SearchOptions;
