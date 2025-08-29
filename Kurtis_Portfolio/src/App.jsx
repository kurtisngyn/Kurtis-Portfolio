import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Jukebox from "./pages/artifacts/jukebox";
import Plateful from "./pages/artifacts/plateful";
import WaterPlus from "./pages/artifacts/Water+";
import Nature from "./pages/artifacts/nature";
import TDF from "./pages/artifacts/TDF";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-lavender relative">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      {/* Router content above noise */}
      <div className="relative z-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="work" element={<Work />} />
              <Route path="/artifacts/TDF" element={<TDF />} />
              <Route path="/artifacts/nature" element={<Nature />} />
              <Route path="/artifacts/jukebox" element={<Jukebox />} />
              <Route path="/artifacts/plateful" element={<Plateful />} />
              <Route path="/artifacts/waterplus" element={<WaterPlus />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
