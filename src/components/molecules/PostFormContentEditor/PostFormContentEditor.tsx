import HtmlRender from "../../atoms/HtmlRender";
import HtmlEditor from "../HtmlEditor";

const PostFormContentEditor = ({ post }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 border p-3 my-5">
        <div className="h-fullb flex flex-col">
          Editor
          <div className="m-3 flex grow">
            <HtmlEditor
              {...{
                editableHtml: post.content,
                handleEditHtml: (e) => console.log("edit", { e })
              }}
            />
          </div>
        </div>
        {/* <div className="h-96 overflow-y-auto"> */}
        <div className="h-fullb flex flex-col">
          Live View
          <div className="m-3 flex h-96 overflow-y-auto grow2 border p-3 bg-white text-black">
            {/* <PostView post={post} /> */}
            <HtmlRender {...{ editableHtml: post?.content }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormContentEditor;
