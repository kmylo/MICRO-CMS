import { FormEvent, useReducer } from "react";
import formReducer from "../reducers/formReducer";
import { IFormConfig, IPost } from "../types";

export interface IPostFormState {
  isLoading: boolean;
  error: string;
  id: string;
  slug: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface IPostFormConfig extends Omit<IFormConfig, "defaultValue"> {
  fieldName: keyof IPostFormState;
}

export interface IUsePostFormResult {
  state: IPostFormState;
  onDispatchField: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleUpdatePostContent?: (value: string) => void;
}

interface IUsePostFormProps {
  post?: IPost;
  onSubmit: (formData: FormData) => void;
}

const usePostForm = ({
  post,
  onSubmit
}: IUsePostFormProps): IUsePostFormResult => {
  const initialState: IPostFormState = {
    isLoading: false,
    error: "",
    id: "",
    slug: "",
    title: "",
    author: "",
    content: "",
    createdAt: ""
  };

  const mergedData = { ...initialState, ...post };

  const [state, dispatch] = useReducer(formReducer, mergedData);
  const { isLoading, error, ...rest } = state;

  const onDispatchField = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) =>
    dispatch({
      type: "field",
      fieldName,
      payload: e.currentTarget.value
    });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(rest);
  };
  const handleUpdatePostContent = (value: string) => {
    dispatch({
      type: "field",
      fieldName: "content",
      payload: value
    });
  };

  return { state, onDispatchField, handleSubmit, handleUpdatePostContent };
};

export default usePostForm;
