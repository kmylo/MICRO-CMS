import TextArea from "../../atoms/TextArea";

const HtmlEditor = ({
  editableHtml,
  handleEditHtml
}: {
  editableHtml: string | undefined;
  handleEditHtml: (value: string) => void;
}) => {
  const handleChange = (event: { target: { value: string } }) =>
    handleEditHtml(event.target.value);
  return (
    <TextArea
      id="htmlEditor"
      name="htmlEditor"
      placeholder="Enter text or plain html"
      defaultStyle={false}
      className="textarea textarea-bordered w-full resize-none"
      value={editableHtml}
      onChange={handleChange}
    />
  );
};

export default HtmlEditor;
