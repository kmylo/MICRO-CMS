import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

//   TODO: create  atoms

const bgHeroImg = "https://i.ytimg.com/vi/qdwKLY45sh4/maxresdefault.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero min-h-screen and cls01"
      style={{
        backgroundImage: `url("${bgHeroImg}")`
      }}
    >
      <div className="hero-overlay bg-opacity-60 and cls02"></div>
      <div className="hero-content text-center text-neutral-content and cls03">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Breaking Bad Atomic Design (WIP)
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button onClick={() => navigate("/blog")} className="btn btn-primary">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const cls01 = "grid place-items-center w-full h-screen bg-cover bg-center";
const cls02 =
  "rounded-md hero-overlay h-full w-full bg-opacity-50 bg-slate-800/60";
const cls03 =
  "text-opacity-100 text-center hero-content z-0 flex items-center justify-center max-w-screen-lg gap-4 p-4";
