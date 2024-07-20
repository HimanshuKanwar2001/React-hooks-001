import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";

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
      path: "/root",//absoulte path
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },//absoulte path
        { path: "/root/about", element: <About /> },   //absoulte path
        { path: "/root/items", element: <Items /> },//absoulte path
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
