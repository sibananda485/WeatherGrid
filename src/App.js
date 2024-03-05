import Main from "./components/Main";
import Nav from "./components/shared/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/shared/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/:city",
    element: (
      <>
        <Nav></Nav>
        <Main></Main>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
