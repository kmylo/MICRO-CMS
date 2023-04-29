import { useState } from "react";
import { IPost } from "../../../types";
import HtmlRender from "../../atoms/HtmlRender";
import HtmlEditor from "../HtmlEditor";

interface PostFormContentEditorProps {
  post?: IPost;
}

const PostFormContentEditor = ({ post }: PostFormContentEditorProps) => {
  const [editableHtml, setEditableHtml] = useState(post?.content);

  const handleEditHtml = (value) => {
    console.log("edit", { value });
    setEditableHtml(value);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 border p-3 my-5">
        <div className="h-fullb flex flex-col">
          Editor
          <div className="m-3 flex grow">
            <HtmlEditor
              {...{
                editableHtml,
                handleEditHtml
              }}
            />
          </div>
        </div>
        {/* <div className="h-96 overflow-y-auto"> */}
        <div className="h-fullb flex flex-col">
          Live View
          <div className="m-3 flex h-96 overflow-y-auto grow2 border p-3 bg-white text-black">
            {/* <PostView post={post} /> */}
            <HtmlRender {...{ editableHtml }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormContentEditor;
