import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer";



const Main = ({ children }) => {
  return (
    <div className="w-full text-gray-400b flex flex-col h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
