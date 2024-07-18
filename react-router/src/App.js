import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "items" && <Items />}
    </div>
  );
}

export default App;
