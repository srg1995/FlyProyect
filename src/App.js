import "./App.css";

import FlyPage from "./pages/FlyPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidenav from "./components/Navigation/Sidenav";
import TroutPage from "./pages/TroutPage";
import PlacesPage from "./pages/PlacesPage";
import DarkToggleButton from "./components/Button/DarkToggleButton";
import ScrollToTop from "react-scroll-to-top";
import FlyDetail from "./components/Fly/FlyDetail";

function App() {
  return (
    <div className="App bg-white dark:bg-lime-900">
      <DarkToggleButton />
      <Sidenav />
      <main className="w-full m-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="flies" element={<FlyPage />} />
          <Route path="trouts" element={<TroutPage />} />
          <Route path="places" element={<PlacesPage />} />
          <Route path="flies/:flyid" element={<FlyDetail />} />
        </Routes>
      </main>
      <ScrollToTop
        smooth
        color="#365314"
        className="font-bold flex items-center justify-center animate-bounce"
      />
    </div>
  );
}

export default App;
