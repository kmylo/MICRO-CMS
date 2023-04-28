import { FC, ReactNode } from "react";
import classNames from "classnames";

export type ButtonProps = {
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
    "font-bold py-2 px-4 rounded focus:outline-none transition duration-200 ease-in-out animation-btn",
    {
      "btn btn-primary": variant === "primary",
      "btn btn-secondary": variant === "secondary",
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

export default Button;
