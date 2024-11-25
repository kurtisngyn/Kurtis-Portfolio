import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Craigslist from "./pages/artifacts/craigslist";
import Jukebox from "./pages/artifacts/jukebox";
import Plateful from "./pages/artifacts/plateful";
import WaterPlus from "./pages/artifacts/Water+";
const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} /> 
        <Route path="/artifacts/craigslist" element={<Craigslist />} />
        <Route path="/artifacts/jukebox" element={<Jukebox />} />
        <Route path="/artifacts/plateful" element={<Plateful />} />
        <Route path="/artifacts/waterplus" element={<WaterPlus />} />
        </Route>      
      </Routes>
    </BrowserRouter>
   
  );
};

export default App
