import { Route, Routes } from "react-router-dom";
import Competences from "../Compétences/Competences";
import NavBar from "../global/NavBar/NavBar";
import Home from "../Home/Home";
import mc from "./app.module.scss";

const App = () => {
  return (
    <div className={mc.container}>
      <NavBar />
      <Routes>
        <Route index path="/mon_portfolio" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
      </Routes>
    </div>
  );
};
export default App;
