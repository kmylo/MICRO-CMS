import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Button from "../components/atoms/Button";

import usePosts from "../hooks/usePosts";

import { IPost } from "../types";

import { basePostRoute, TODAY_DATE } from "../utils/constants";
import HtmlRender from "../components/atoms/HtmlRender";
import { FormEvent, useReducer } from "react";

import HtmlEditor from "../components/molecules/HtmlEditor";

import Post from "../components/organisms/Post";

const DefaultPage = () => (
  <div className="someclass">
    <h1>Default Page</h1>
  </div>
);

export const NotFound = () => {
  return (
    <div>
      <h1>NOT FOUND message!</h1> <small>soft </small>404
      <p>
        <span>
          Wrong status code, need to do via server. Redirect to real 404 server
          rules, or proxy
        </span>
      </p>
    </div>
  );
};

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

export const PostCreate = () => {
  return (
    <div>
      <span>post create</span>
    </div>
  );
};

const PostView = ({ post }) => {
  return (
    <>
      {/* <h1>Edit Post</h1> */}
      <HtmlRender {...{ editableHtml: post?.content }} />
    </>
  );
};
const PostEditor = ({ post }) => {
  return (
    <div className="border">
      <h1>Edit Post</h1>
    </div>
  );
};

const PostFormContentEditor = ({ post }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 border p-3 my-5">
        <div className="h-fullb flex flex-col">
          Editor
          <div className="m-3 flex grow">
            <HtmlEditor
              {...{
                editableHtml: post.content,
                handleEditHtml: (e) => console.log("edit", { e })
              }}
            />
          </div>
        </div>
        {/* <div className="h-96 overflow-y-auto"> */}
        <div className="h-fullb flex flex-col">
          Live View
          <div className="m-3 flex h-96 overflow-y-auto grow2 border p-3 bg-white text-black">
            <PostView post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

function FormReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }
    case "success": {
      return {
        ...state,
        isSaving: true,
        isLoading: false
      };
    }
    case "error": {
      return {
        ...state,
        error: "Msg error!",
        isSaving: false,
        isLoading: false,
        username: "",
        password: ""
      };
    }
    default:
      return state;
  }
}

export const initialState = {
  isLoading: false,
  error: "",
  id: "",
  slug: "",
  title: "",
  author: "",
  content: "",
  createdAt: "",
  tags: []
};

interface PostFormProps {
  post: IPost;
  onSubmit: (formData: FormData) => void;
  handleCancelEdit: any;
}

interface IFormConfig {
  type: string;
  label: string;
  field: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  defaultValue?: string;
}
export const PostForm = ({
  post,
  onSubmit,
  handleCancelEdit
}: PostFormProps) => {
  const mergedData = { ...initialState, ...post };

  const [state, dispatch] = useReducer(FormReducer, mergedData);
  const { isLoading, error, ...rest } = state;
  // const [content, setContent] = useState(post.content);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(rest);
    handleCancelEdit();
  };
  const onDispatchField = (e, fieldName) =>
    dispatch({
      type: "field",
      fieldName,
      payload: e.currentTarget.value
    });

  const formConfig: IFormConfig[] = [
    {
      type: "text",
      label: "title",
      field: "title",
      placeholder: "Enter title",
      minLength: 2,
      defaultValue: post.title,
      required: true
    },
    {
      type: "text",
      label: "author",
      field: "author",
      placeholder: "Athor",
      minLength: 2,
      defaultValue: post.author
    }
  ];

  return (
    <>
      PostForm
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          {formConfig.map(
            ({
              type,
              label,
              field,
              defaultValue,
              placeholder,
              minLength,
              maxLength,
              required
            }) => (
              <div className="form-control mb-3" key={label}>
                <label className="label">
                  <span className="label-text">{label}</span>
                </label>
                <label className="input-group">
                  {/* <span className="label-text">{label}</span> */}
                  <input
                    type={type}
                    name={field}
                    defaultValue={defaultValue}
                    className="input input-bordered"
                    minLength={minLength}
                    maxLength={maxLength}
                    required={required}
                    placeholder={placeholder ?? "placeholder"}
                    onChange={(e) => onDispatchField(e, field)}
                  />
                </label>
              </div>
            )
          )}
          {/* <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          /> */}
        </div>
        {/* <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            // value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div> */}
        <PostFormContentEditor {...{ post }} />

        <div className="button-container">
          {/* TODO: make button component */}
          <button
            className="button button-primary form-button"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "SAVING..." : "SAVE"}
          </button>
          <button className="button form-button" onClick={handleCancelEdit}>
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
};

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
