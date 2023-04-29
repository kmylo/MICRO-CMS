import Header from "../components/organisms/Header";
import { TodayDate } from "../pages/TmpAll";

export const MainLayout = ({ children }) => {
  return (
    // <div className="bg-[#262837] w-full min-h-screen text-gray-400">
    <div className="w-full min-h-screen text-gray-400b flex flex-col">
      <Header />
      {children}
      <footer className="lala mb-4 mt-2b mt-auto">
        <hr className="mt-6 mb-6" />
        SOME FOOTER <TodayDate />
      </footer>
    </div>
  );
};
