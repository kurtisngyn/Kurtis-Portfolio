import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Jukebox from "./pages/artifacts/jukebox";
import Plateful from "./pages/artifacts/plateful";
import WaterPlus from "./pages/artifacts/Water+";
import Nature from "./pages/artifacts/nature";
const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} /> 
        <Route path="/artifacts/nature" element={<Nature />} />
        <Route path="/artifacts/jukebox" element={<Jukebox />} />
        <Route path="/artifacts/plateful" element={<Plateful />} />
        <Route path="/artifacts/waterplus" element={<WaterPlus />} />
        </Route>      
      </Routes>
    </BrowserRouter>
   
  );
};

export default App
