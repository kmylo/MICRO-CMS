import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/Routes"; //TODO: check this as a service

const NavMenu = () => {
  return (
    <>
      <div className="flex md:hidden">
        <div className="dropdown ml-2">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-vertical2 md:menu-horizontal and menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {APP_ROUTES.map(({ path, title }) => {
              if (!title) return;
              return (
                <li key={title}>
                  <NavLink to={path!}>{title}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl flex-1 md:hidden">
          LOGO daisyUI
        </a>
      </div>
      <nav className="hidden md:flex navbar navbar-dark">
        <ul className="menu menu-vertical2 md:menu-horizontal ">
          {APP_ROUTES.map(({ path, title }) => {
            if (!title) return;
            return (
              <li key={title}>
                <NavLink to={path!}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
