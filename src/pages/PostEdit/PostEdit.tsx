import { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { basePostRoute } from "../../utils/constants";
import { PostForm } from "../TmpAll";

const postKeyNav = "title";

const updateState2 = (initialState, currentId, newData, setUpdatedState) => {
  const newState = initialState.map((obj) => {
    if (obj.id === currentId) {
      const res = { ...obj, ...newData };
      console.log({ res, obj, newData });
      // return { ...obj, ...newData };
      return res;
    }

    console.log({ obj });
    return obj;
  });
  console.log({ newState });

  setUpdatedState(newState);
};

export const PostEdit = () => {
  const { id, postParam } = useParams<{
    id: string;
    postParam: string | undefined;
  }>();
  // const { postParam } = useParams();
  const { posts, handleUpdatePosts } = usePosts();
  const navigate = useNavigate();
  // const currentPost = posts.find((_post) => postParam === _post[postKeyNav]);

  const currentPost = useMemo(
    () => posts?.find((_post) => postParam === _post[postKeyNav]),
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

  const updateState = (initialState, updatedPost) => {
    const newState = initialState.map((currPost) => {
      if (currPost.id === updatedPost.id) {
        const res = { ...currPost, ...updatedPost };
        console.log({ res, currPost, updatedPost });
        // return { ...obj, ...newData };
        return res;
      }

      console.log({ currPost });
      return currPost;
    });
    console.log({ newState });
    handleUpdatePosts(newState);
    navigate("/blog");
  };

  const handleSubmit = (formData: FormData) => {
    console.log("handleSubmit", { currentPost, formData });
    // handleUpdatePost(Number(id), formData);
    // history.push(`/posts/${id}`);
    updateState(posts, formData);

    // navigate(`/posts/${id}`);
  };
  const handleCancel = (e) => {
    console.log("cancel and goback", { currentPost, e });
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
