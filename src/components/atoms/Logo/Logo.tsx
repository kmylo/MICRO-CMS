import classNames from "classnames";
import { Link } from "react-router-dom";
export interface LogoProps {
  logoTxt?: string;
  variant?: any;
}

const Logo = ({ logoTxt = "Logo", variant }: LogoProps) => {
  const logoClassNames = classNames("brand-logo p-3", {
    "logo logo-primary": variant === "primary"
  });
  return (
    <Link to="/">
      <div className={logoClassNames}>
        <h1 className="text-3xl text-gray-300">{logoTxt}</h1>
      </div>
    </Link>
  );
};

export default Logo;

const MyLink = () => {
  <Link to="/">
    <div className="some">
      <h1 className="text-3xl text-gray-300">logoTxt</h1>
    </div>
  </Link>;
};
