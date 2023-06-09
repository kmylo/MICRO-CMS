import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../components/organisms/PostForm";
import usePosts from "../../hooks/usePosts";
import { updatePosts } from "../../services/api";

import { basePostRoute, postFormConfig } from "../../utils/constants";

const postKeyNav = "title";

export const PostEdit = () => {
  const { id, postParam } = useParams<{
    id: string;
    postParam: string | undefined;
  }>();

  const { posts, handleUpdatePosts } = usePosts();
  const navigate = useNavigate();

  const currentPost = useMemo(
    () => posts?.find((postItem) => postParam === postItem[postKeyNav]),
    [postParam, posts]
  );

  const handleSubmit = (formData: FormData) => {
    updatePosts(posts, formData, handleUpdatePosts);
    navigate("/blog");
  };
  const handleCancel = () => {
    navigate(`${basePostRoute}${currentPost?.title}`);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <PostForm
        post={currentPost}
        onSubmit={handleSubmit}
        handleCancelEdit={handleCancel}
        postFormConfig={postFormConfig}
      />
    </div>
  );
};

export default PostEdit;
