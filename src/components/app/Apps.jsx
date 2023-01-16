import { Route, Routes } from "react-router-dom";
import Competences from "../pages/Compétences/Competences";
import NavBar from "../global/NavBar/NavBar";
import Home from "../pages/Home/Home";
import mc from "./app.module.scss";
import QuiSuisJe from "../pages/qui-suis-je/QuiSuisJe";

const App = () => {
  return (
    <div className={mc.container}>
      <NavBar />
      <Routes>
        <Route index path="/mon_portfolio" element={<Home />} />
        <Route path="/mon_portfolio/qui_suis_je" element={<QuiSuisJe />} />
        <Route path="/mon_portfolio/competences" element={<Competences />} />
      </Routes>
    </div>
  );
};
export default App;
