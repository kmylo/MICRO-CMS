import { Suspense } from "react";
import { PostsContextProvider } from "./context/PostsContext";

import MainRouter from "./components/organisms/MainRouter";
import Main from "./components/templates/Main";
import { APP_ROUTES } from "./routes/Routes";

import "./App.css";

function App() {
  return (
    <>
      {/* <Suspense fallback={<span>Loading...</span>}> */}
      <Suspense fallback={null}>
        <PostsContextProvider>
          <Main>
            <main className="main-container mb-4">
              <MainRouter routes={APP_ROUTES} />
            </main>
          </Main>
        </PostsContextProvider>
      </Suspense>
    </>
  );
}

export default App;
