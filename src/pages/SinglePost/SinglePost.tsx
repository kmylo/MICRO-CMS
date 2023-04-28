import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/atoms/Button";
import Post from "../../components/organisms/Post";
import usePosts from "../../hooks/usePosts";

const SinglePost = () => {
  const { postParam } = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts();
  // const postKeyNav = "slug"
  const postKeyNav = "title";
  const currentPost = posts.find((post) => postParam === post[postKeyNav]);

  const handleBtnClick = () => {
    navigate("edit");
  };
  return (
    <div>
      <div className="blog-header flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-3">
        <div>
          <span className="text-xl uppercase">Read Post</span>
        </div>

        <Button className="btn-secondary" onClick={handleBtnClick}>
          EDIT POST
        </Button>
      </div>

      <Post {...currentPost!} />
    </div>
  );
};

export default SinglePost;
