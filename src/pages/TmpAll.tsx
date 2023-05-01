import { TODAY_DATE } from "../utils/constants";


import Post from "../components/organisms/Post";
import { useNavigate, useParams } from "react-router-dom";
import usePosts from "../hooks/usePosts";

const DefaultPage = () => (
  <div className="someclass">
    <h1>Default Page</h1>
  </div>
);


export const PostDetails = () => {
  return (
    <div>
      <div className="border">Details</div>
    </div>
  );
};


export const TodayDate = () => {
  return <div className="text-gray-500">{TODAY_DATE}</div>;
};

export const Label = ({ labelText = "Search Posts" }) => {
  return (
    <>
      <div className="text-left uppercase text-xs pb-3">{labelText}</div>
      {/* <label className="text-left uppercase text-xs pb-3">
        Search the Site
      </label> */}
    </>
  );
};
