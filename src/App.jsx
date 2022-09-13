import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";

//Current this is a single page.
//TODO:Have the gallery linkable
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
