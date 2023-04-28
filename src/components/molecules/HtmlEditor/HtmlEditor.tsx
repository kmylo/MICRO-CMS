import TextArea from "../../atoms/TextArea";

const HtmlEditor = ({ editableHtml, handleEditHtml }) => {
  const handleChange = (event) => handleEditHtml(event.target.value);
  return (
    <>
      {/* <h1>Edit Post</h1> */}

      <TextArea
        id="htmlEditor"
        name="htmlEditor"
        defaultStyle={false}
        // className="textarea textarea-bordered h-full w-full resize-none"
        className="textarea textarea-bordered w-full resize-none"
        value={editableHtml}
        onChange={handleChange}
      />
      {/* <textarea
        autoFocus
        value={editableHtml}
        onChange={handleChange}
        className="h-full w-full resize-none"
      /> */}
      {/* <div className="form-control">
        <label className="label">
          <span className="label-text">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
        <label className="label">
          <span className="label-text-alt">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div> */}
    </>
  );
};

export default HtmlEditor;
