import { MainRouter } from "./containers/MainRouter";
import { MainLayout } from "./layouts/MainLayout";
import { APP_ROUTES } from "./utils/Routes";

import "./App.css";
import { Suspense } from "react";
import { PostsContextProvider } from "./context/PostsContext";

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <PostsContextProvider>
          <MainLayout>
            <main className="main-container">
              <MainRouter routes={APP_ROUTES} />
            </main>
          </MainLayout>
        </PostsContextProvider>
      </Suspense>
    </>
  );
}

export default App;
