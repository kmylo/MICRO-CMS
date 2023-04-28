import { Link } from "react-router-dom";
import { IPost } from "../../../types";
import { basePostRoute } from "../../../utils/constants";
import HtmlRender from "../../atoms/HtmlRender/HtmlRender";
import { fullToLocaleDateString } from "../../../utils";

const Post = ({ author, title, content, createdAt, slug, ...props }: IPost) => {
  const postLink = `${basePostRoute}${title}`;

  return (
    <div className="post-wrapper" {...props}>
      <div className="post-header">
        <Link to={postLink} className="post-link">
          <h2 className="text-4xl"> {title}</h2>
        </Link>
      </div>
      <div className="post-content border-4 border-indigo-500/50 rounded-md p-5 m-5">
        <HtmlRender editableHtml={content} />
      </div>
      <div className="post-footer">
        {author ? (
          <div>
            <b>Author: </b>
            {author}
          </div>
        ) : null}
        <div className="item-date"> {fullToLocaleDateString(createdAt)}</div>
      </div>
    </div>
  );
};

export default Post;
