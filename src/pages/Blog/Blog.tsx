import { useNavigate } from "react-router-dom";

import Button from "../../components/atoms/Button";
import Post from "../../components/organisms/Post";

import usePosts from "../../hooks/usePosts";

import { basePostRoute } from "../../utils/constants";
import { Fragment } from "react";
import Card from "../../components/atoms/Card/Card";

const Blog = () => {
  const { posts } = usePosts();
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(`${basePostRoute}/new`);
  };
  return (
    <div>
      <div className="blog-header flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-3">
        <div>
          <span className="text-xl">BLOG</span>
        </div>
        <Button
          className="transition duration-200 ease-in-out animation-btn"
          onClick={handleBtnClick}
          variant="secondary"
        >
          ADD NEW POST
        </Button>
      </div>

      <div className="text-3xl pb-5">List of Posts</div>
      {posts?.map((postItem) => {
        const { id } = postItem;
        return (
          <Fragment key={id}>
            <Card>
              <div className="post-content">
                <Post {...postItem} />
              </div>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Blog;
