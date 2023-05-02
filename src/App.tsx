import { Suspense } from "react";
import { PostsContextProvider } from "./context/PostsContext";

import Loading from "./components/atoms/Loading";
import MainRouter from "./components/organisms/MainRouter";
import Main from "./components/templates/Main";
import { APP_ROUTES } from "./routes/Routes";

import "./App.css";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Main>
            <Loading />
          </Main>
        }
      >
        <PostsContextProvider>
          <Main>
            <main className="main-container mb-4 px-4">
              <MainRouter routes={APP_ROUTES} />
            </main>
          </Main>
        </PostsContextProvider>
      </Suspense>
    </>
  );
}

export default App;
