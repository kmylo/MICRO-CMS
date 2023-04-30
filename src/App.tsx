import { Suspense } from "react";
import { PostsContextProvider } from "./context/PostsContext";

import MainRouter from "./components/organisms/MainRouter";
import { APP_ROUTES } from "./routes/Routes";
import Main from "./components/templates/Main";

import "./App.css";

function App() {
  return (
    <>
      {/* <Suspense fallback={<span>Loading...</span>}> */}
      <Suspense fallback={null}>
        <PostsContextProvider>
          <Main>
            <main className="main-container">
              <MainRouter routes={APP_ROUTES} />
            </main>
          </Main>
        </PostsContextProvider>
      </Suspense>
    </>
  );
}

export default App;
