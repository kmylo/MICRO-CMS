import { ReactNode } from "react";

import Logo from "../../atoms/Logo/Logo";
import NavMenu from "../../molecules/NavMenu";
import SearchPosts from "../SearchPosts";

export const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className="header home-header border-solid border-b-2 border-sky-500 mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-3">
        <Logo />
        <NavMenu />
        {children}
        <SearchPosts />
      </div>
    </header>
  );
};

export default Header;
