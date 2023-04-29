import { TODAY_DATE } from "../utils/constants";
import HtmlRender from "../components/atoms/HtmlRender";
import Button from "../components/atoms/Button";
import Post from "../components/organisms/Post";
import { useNavigate, useParams } from "react-router-dom";
import usePosts from "../hooks/usePosts";

const DefaultPage = () => (
  <div className="someclass">
    <h1>Default Page</h1>
  </div>
);

export const PostPage = () => {
  const { postParam } = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts();
  // const postKeyNav = "slug"
  const postKeyNav = "title";
  const currentPost = posts.find((post) => postParam === post[postKeyNav]);
  // console.log({ currentPost, postParam });
  const handleBtnClick = () => {
    console.log("click");
    navigate("edit");
  };
  return (
    <div>
      <h1>READ POST</h1>

      <div className="blog-header flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-3">
        {/* <span> */}
        {/* SLUG::  */}
        {/* {postKeyNav}:: {postParam} */}
        {/* </span> */}
        <Button onClick={handleBtnClick}>EDIT POST</Button>
      </div>
      {/* <Outlet /> */}
      <Post {...currentPost!} />
    </div>
  );
};

export const PostDetails = () => {
  return (
    <div>
      <div className="border">Details</div>
    </div>
  );
};

// const PostView = ({ post }) => {
//   return (
//     <>
//       {/* <h1>Edit Post</h1> */}
//       <HtmlRender {...{ editableHtml: post?.content }} />
//     </>
//   );
// };

// const PostEditor = ({ post }) => {
//   return (
//     <div className="border">
//       <h1>Edit Post</h1>
//     </div>
//   );
// };

// const PostEdit = () => (
//   <div className="border">
//     EDIT FORM <PostForm />
//   </div>
// );

//  {
//       id: "1",
//       slug: "post01--rich-content-with-mdx",
//       title: "Lorem ipsum dolor sit amet",
//       author: "kmylo",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sapien ac ipsum aliquet, vel elementum nulla consequat. Donec sed erat id ipsum vestibulum sollicitudin. Fusce aliquam sagittis lectus sit amet tincidunt. Donec eu est vel nisi bibendum auctor. Quisque semper, purus eu interdum mattis, justo nibh posuere elit, quis efficitur orci dolor eu justo.",
//       createdAt: new Date(),
//       tags: ["react", "next", "photo"],
//     },

export const TodayDate = () => {
  return <div className="text-gray-500">{TODAY_DATE}</div>;
};

export const Label = ({ labelText = "Search Posts" }) => {
  return (
    <>
      <div className="text-left uppercase text-xs pb-3">{labelText}</div>
      {/* <label className="text-left uppercase text-xs pb-3">
        Search the Site
      </label> */}
    </>
  );
};
