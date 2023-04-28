import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import usePosts from "../../hooks/usePosts";
import { basePostRoute } from "../../utils/constants";
import Post from "../../components/organisms/Post";

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
          {/* TITLE:  */}
          <span className="text-xl">BLOG</span>
        </div>
        <Button onClick={handleBtnClick}>ADD NEW POST</Button>
      </div>
      {/* <Outlet /> */}
      <div className="text-3xl pb-5">List of Posts</div>
      {posts?.map((item, idx) => {
        const { author, createdAt, content, title } = item;
        // const createdDate = new Date(createdAt).toLocaleDateString();
        // TODO: replace IDX
        return (
          <div
            key={idx}
            className="post-content p-6 card bg-base-100 shadow-xl my-3"
          >
            <Post {...item} />
            {/* <Bkp {...item} /> */}
            {/* {JSON.stringify(item, null, 2)} */}
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
