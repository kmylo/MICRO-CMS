import { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { basePostRoute } from "../../utils/constants";
import { PostForm } from "../TmpAll";

const postKeyNav = "title";

export const PostEdit = () => {
  const { id, postParam } = useParams<{
    id: string;
    postParam: string | undefined;
  }>();
  // const { postParam } = useParams();
  const {
    posts
    // handleUpdatePost
  } = usePosts();
  const navigate = useNavigate();
  // const currentPost = posts.find((_post) => postParam === _post[postKeyNav]);

  const currentPost = useMemo(
    () => posts.find((_post) => postParam === _post[postKeyNav]),
    [postParam, posts]
  );

  // const history = useHistory();
  // const post = posts.find((postItem) => postItem.id === id);

  // useEffect(() => {
  //   if (!currentPost) {
  //     // history.push("/404");
  //     navigate("/404");
  //   }
  // }, [currentPost, navigate]);

  const handleSubmit = (formData: FormData) => {
    // handleUpdatePost(Number(id), formData);
    // history.push(`/posts/${id}`);
    console.log({ formData });
    // navigate(`/posts/${id}`);
  };

  const handleCancel = () => {
    console.log("cancel and goback", { currentPost });
    navigate(`${basePostRoute}${currentPost?.title}`);
    // navigate(-1);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {currentPost ? (
        <>
          <PostForm
            post={currentPost}
            onSubmit={handleSubmit}
            handleCancelEdit={handleCancel}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostEdit;
