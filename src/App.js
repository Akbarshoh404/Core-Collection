import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/index";
import Clothes from "./Pages/Clothes/index";
import About from "./Pages/About/index";
import Contact from "./Pages/Contact/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
