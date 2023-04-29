import { FormEvent, useReducer } from "react";

import { IPost } from "../../../types";
import PostFormContentEditor from "../../molecules/PostFormContentEditor";

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
        isLoading: false
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
  post?: IPost;
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

const PostForm = ({ post, onSubmit, handleCancelEdit }: PostFormProps) => {
  const mergedData = { ...initialState, ...post };

  const [state, dispatch] = useReducer(FormReducer, mergedData);
  const { isLoading, error, ...rest } = state;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(rest);
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
      defaultValue: post?.title,
      required: true
    },
    {
      type: "text",
      label: "author",
      field: "author",
      placeholder: "Athor",
      minLength: 2,
      defaultValue: post?.author
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

export default PostForm;
