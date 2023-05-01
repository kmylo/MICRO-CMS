import DOMPurify from "dompurify";

const HtmlRender = ({ editableHtml }) => {
  const htmlSanatized = DOMPurify.sanitize(editableHtml);
  // TODO: add options
  return (
    <div className="html-render column with-border">
      <div dangerouslySetInnerHTML={{ __html: htmlSanatized }}></div>
    </div>
  );
};

export default HtmlRender;
