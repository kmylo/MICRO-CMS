import { useRoutes } from "react-router-dom";

const MainRouter = ({ routes }) => {
  const element = useRoutes(routes);
  return element;
};

export default MainRouter;
