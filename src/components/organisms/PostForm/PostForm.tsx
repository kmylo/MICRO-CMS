import Button from "../../atoms/Button";
import PostFormContentEditor from "../../molecules/PostFormContentEditor";
import usePostForm from "../../../hooks/usePostForm";
import { IFormConfig, IPost } from "../../../types";

export const postFormConfig: IFormConfig[] = [
  {
    type: "text",
    label: "title",
    field: "title",
    placeholder: "Enter title",
    minLength: 2,
    required: true
  },
  {
    type: "text",
    label: "author",
    field: "author",
    placeholder: "Author",
    minLength: 2
  }
];

interface PostFormProps {
  post?: IPost;
  onSubmit: (formData: FormData) => void;
  handleCancelEdit: any;
  formConfig: IFormConfig[];
}

const PostForm = ({ post, onSubmit, handleCancelEdit }: PostFormProps) => {
  const { state, onDispatchField, handleSubmit, handleUpdatePostContent } =
    usePostForm({
      post,
      onSubmit
    });
  const { isLoading } = state;

  return (
    <>
      {/* PostForm */} {/* TODO: add some form comp with the post wrapper */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          {postFormConfig.map(
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
                    defaultValue={defaultValue ?? post?.[field]}
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
        </div>

        <PostFormContentEditor {...{ post, handleUpdatePostContent }} />

        <div className="form-button button-container my-5">
          <Button
            className="form-button btn-primary mr-2"
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
