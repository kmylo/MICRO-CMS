import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../utils/Routes"; //TODO: check this as a service

const NavMenu = () => {
  return (
    <nav className="hidden md:flex navbar navbar-dark">
      <ul className=" menu menu-vertical2 md:menu-horizontal ">
        {APP_ROUTES.map(({ path, title }) => {
          if (!title) return;
          return (
            <li key={title}>
              {/* <Link to={path}>{title}</Link> */}
              <NavLink to={path!}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
