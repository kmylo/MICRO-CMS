import { FC, ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "link";
};

const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
  children
}) => {
  const buttonClassNames = classNames(
    "font-bold py-2 px-4 rounded focus:outline-none",
    {
      // "bg-blue-500 hover:bg-blue-700 text-white": variant === "primary",
      "bg-gray-300 hover:bg-gray-400 text-gray-700": variant === "secondary",
      "text-blue-500 hover:text-blue-700": variant === "link"
    },
    className
  );

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClassNames}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// const Button = ({ btnText = "button" }) => {
//   return <button className="btn btn-primary">{btnText}</button>;
// };
export default Button;
