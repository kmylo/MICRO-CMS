import PostForm from "../../components/organisms/PostForm";
import usePosts from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../utils";

const PostCreate = () => {
  const { posts, handleUpdatePosts } = usePosts();
  const navigate = useNavigate();
  const handleSubmit = (formData: FormData) => {
    console.log({ formData });
    // updatePosts(posts, formData, handleUpdatePosts);
    createPost(posts, formData, handleUpdatePosts);
    navigate("/blog");
  };
  const handleCancel = (e) => {
    // navigate(`${basePostRoute}${currentPost?.title}`);
  };
  return (
    <div className="border">
      <div>New Post (WIP2)</div>
      <PostForm
        // post={currentPost}
        onSubmit={handleSubmit}
        handleCancelEdit={handleCancel}
      />
    </div>
  );
};

export default PostCreate;
