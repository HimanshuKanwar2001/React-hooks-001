import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Items from "./pages/Items";
import ErrorPage from "./pages/ErrorPage";

function App() {
  // const routes=createRoutesFromElements(
  //   <>
  //   <Route path='/' element:{<Navbar/>}
  //      <Route index element={<Home/>} />
  //      <Route path="/about" element={<About/>} />
  //      <Route path="/items" element={<Items/>} />
  //   </Route>
  //   </>

  // )

  // const router=createBrowserRouter(routes);

  const router = createBrowserRouter([
    {
      path: "/", //relative path
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> }, //relative  path
        { path: "about", element: <About /> }, //relative  path
        {
          path: "items",
          children: [
            { index: true, element: <Items /> },
            { path: ":id", element: <ItemDetails /> },
          ],
        }, //relative  path
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
