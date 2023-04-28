import { useRoutes } from "react-router-dom";

export const MainRouter = ({ routes }) => {
  let element = useRoutes(routes);
  return element;
};
