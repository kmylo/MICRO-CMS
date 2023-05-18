import classNames from "classnames";

export interface LabelProps {
  className?: string;
  labelText: string;
  variant?: "uppercase" | "lowercase";
}
const Label = ({
  className = "",
  labelText = "Label",
  variant
}: LabelProps) => {
  const labelClassNames = classNames(
    "text-left text-xs pb-3",
    {
      uppercase: variant === "uppercase"
    },
    className
  );
  return (
    <>
      <div className={labelClassNames}>{labelText}</div>
      {/* <label className="text-left uppercase text-xs pb-3">
        Search the Site
      </label> */}
    </>
  );
};

export default Label;
