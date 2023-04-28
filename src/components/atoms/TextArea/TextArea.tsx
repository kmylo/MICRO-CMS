import React, { ChangeEventHandler, forwardRef } from "react";
import cx from "classnames";

// interface TextAreaProps {
//   name: string;
//   label?: string;
//   placeholder?: string;
//   value?: string;
//   onChange: ChangeEventHandler<HTMLTextAreaElement>;
// }

// const TextArea: React.FC<TextAreaProps> = ({
//   name,
//   label,
//   placeholder,
//   value,
//   onChange
// }) => {
//   return (
//     <div className="flex flex-col">
//       {label && <label htmlFor={name}>{label}</label>}
//       <textarea
//         id={name}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className="py-2 px-3 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 resize-none"
//       />
//     </div>
//   );
// };

// border-gray-300 focus:border-indigo-500

const baseClassName =
  "block w-full bg-gray-800 border border-gray-600 rounded-lg py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500";
interface ITextAreaProps {
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
