import DOMPurify from "dompurify";

export interface HtmlRenderProps {
  editableHtml: string | undefined;
}
const HtmlRender = ({ editableHtml }: HtmlRenderProps) => {
  const htmlSanatized =
    (editableHtml && DOMPurify.sanitize(editableHtml)) ?? "";
  // TODO: add options
  return (
    <div className="html-render column with-border">
      <div dangerouslySetInnerHTML={{ __html: htmlSanatized }}></div>
    </div>
  );
};

export default HtmlRender;
