import PostForm from "../../components/organisms/PostForm";
import usePosts from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../utils";

const PostCreate = () => {
  const { posts, handleUpdatePosts } = usePosts();
  const navigate = useNavigate();
  const handleSubmit = (formData: FormData) => {
    createPost(posts, formData, handleUpdatePosts);
    navigate("/blog");
  };
  const handleCancel = (e) => {
    navigate("/blog");
  };
  return (
    <div className="new-post-container">
      <div>New Post</div>
      <PostForm onSubmit={handleSubmit} handleCancelEdit={handleCancel} />
    </div>
  );
};

export default PostCreate;
