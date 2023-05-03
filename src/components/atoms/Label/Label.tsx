const Label = ({ labelText = "Search Posts" }) => {
  return (
    <>
      <div className="text-left uppercase text-xs pb-3">{labelText}</div>
      {/* <label className="text-left uppercase text-xs pb-3">
        Search the Site
      </label> */}
    </>
  );
};

export default Label;
