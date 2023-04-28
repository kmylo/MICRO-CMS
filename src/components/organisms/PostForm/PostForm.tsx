import { FormEvent, useReducer } from "react";

import Button from "../../atoms/Button";
import PostFormContentEditor from "../../molecules/PostFormContentEditor";
import { IPost } from "../../../types";

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

  const onDispatchField = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) =>
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

  const handleUpdatePost = (value) => {
    dispatch({
      type: "field",
      fieldName: "content",
      payload: value
    });
  };

  return (
    <>
      {/* PostForm */} {/* TODO: add some form comp with the post wrapper */}
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
                  <span className="label-text uppercase text-xs text-sky-400/75">
                    {label}
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type={type}
                    name={field}
                    defaultValue={defaultValue}
                    className="input input-bordered w-full"
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

        <PostFormContentEditor {...{ post, handleUpdatePost }} />

        <div className="button-container my-5">
          <Button
            className="button btn-primary form-button mr-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "SAVING..." : "SAVE"}
          </Button>
          <Button
            className="form-button btn-secondary"
            onClick={handleCancelEdit}
          >
            CANCEL
          </Button>
        </div>
      </form>
    </>
  );
};

export default PostForm;
