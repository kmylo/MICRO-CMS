import PostForm from "../../components/organisms/PostForm";
import usePosts from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/api";
import { postFormConfig } from "../../utils/constants";

const PostCreate = () => {
  const { posts, handleUpdatePosts } = usePosts();
  const navigate = useNavigate();
  const handleSubmit = (formData: FormData) => {
    createPost(posts, formData, handleUpdatePosts);
    navigate("/blog");
  };
  const handleCancel = () => {
    navigate("/blog");
  };
  return (
    <div className="new-post-container">
      <div>
        <span className="text-xl uppercase">New Post</span>
      </div>
      <PostForm
        onSubmit={handleSubmit}
        handleCancelEdit={handleCancel}
        postFormConfig={postFormConfig}
      />
    </div>
  );
};

export default PostCreate;
