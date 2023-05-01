import { useNavigate } from "react-router-dom";

import Button from "../../components/atoms/Button";
import Post from "../../components/organisms/Post";

import usePosts from "../../hooks/usePosts";

import { basePostRoute } from "../../utils/constants";
import { fullToLocaleDateString, slugify } from "../../utils";

const Blog = () => {
  const { posts } = usePosts();
  const navigate = useNavigate();
  const handleBtnClick = () => {
    console.log("click");
    navigate(`${basePostRoute}/new`);
  };
  return (
    <div>
      <div className="blog-header flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-3">
        <div>
          <span className="text-xl">BLOG</span>
        </div>
        <Button
          className="btn-secondary transition duration-200 ease-in-out animation-btn"
          onClick={handleBtnClick}
        >
          ADD NEW POST
        </Button>
      </div>

      <div className="text-3xl pb-5">List of Posts</div>
      {posts?.map((postItem) => {
        const { createdAt, title } = postItem;
        const index = `${slugify(title)}${fullToLocaleDateString(createdAt)}`;
        return (
          <div
            key={index}
            className="post-content p-6 card bg-base-100 shadow-xl my-3"
          >
            <Post {...postItem} />
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
