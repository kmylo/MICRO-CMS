import cn from "classnames";
import { forwardRef } from "react";

export interface IInputProps {
  type: string;
  name: string;
  className?: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ type, name, className, id, placeholder, value, onChange }, ref) => {
    const baseClassName =
      "block w-full bg-gray-800 border border-gray-600 rounded-lg py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500";

    const inputClass = cn(className, baseClassName);
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
