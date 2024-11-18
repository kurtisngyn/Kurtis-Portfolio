import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} /> 
        </Route>      
      </Routes>
    </BrowserRouter>
   
  );
};

export default App
