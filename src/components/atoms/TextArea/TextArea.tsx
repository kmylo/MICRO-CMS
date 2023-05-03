import React, { forwardRef } from "react";
import cx from "classnames";

const baseClassName =
  "block w-full bg-gray-800 border border-gray-600 rounded-lg py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500";
export interface ITextAreaProps {
  className?: string;
  defaultStyle?: boolean;
  name: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (
    {
      className,
      defaultStyle = true,
      name,
      id,
      placeholder,
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    const defaultClassName = defaultStyle ? baseClassName : "";

    const mergedClassName = cx(defaultClassName, className);
    return (
      <textarea
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={mergedClassName}
        {...rest}
      />
    );
  }
);
TextArea.displayName = "TextArea";
export default TextArea;
