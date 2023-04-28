import { Link } from "react-router-dom";

const Logo = ({ logoTxt = "Logo" }) => {
  return (
    <Link to="/">
      <div className="brand-logo p-3">
        <h1 className="text-3xl text-gray-300">{logoTxt}</h1>
      </div>
    </Link>
  );
};

export default Logo;
