import { useState } from "react";
import { IPost } from "../../../types";
import HtmlRender from "../../atoms/HtmlRender";
import HtmlEditor from "../HtmlEditor";

interface PostFormContentEditorProps {
  post?: IPost;
  handleUpdatePostContent?: (value: string) => void;
}

const PostFormContentEditor = ({
  post,
  handleUpdatePostContent
}: PostFormContentEditorProps) => {
  const [editableHtml, setEditableHtml] = useState(post?.content);

  const handleEditHtml = (value: string) => {
    handleUpdatePostContent && handleUpdatePostContent(value);
    setEditableHtml(value);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 border rounded-sm p-3 my-5">
        <div className="h-fullb flex flex-col">
          <div className="title uppercase">Editor</div>
          <div className="m-3 flex grow">
            <HtmlEditor
              {...{
                editableHtml,
                handleEditHtml
              }}
            />
          </div>
        </div>

        <div className="h-fullb flex flex-col">
          <div className="title uppercase"> Live View</div>

          <div className="m-3 flex h-96 overflow-y-auto border p-3 bg-white text-black rounded-md">
            <HtmlRender {...{ editableHtml }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormContentEditor;
