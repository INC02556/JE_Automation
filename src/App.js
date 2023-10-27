import "./App.css";
import MainPage from "./pages/MainPage";
import ManualJournal from "./pages/ManualJournal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="manualjournal" element={<ManualJournal />}></Route>
    </Routes>
  );
}

export default App;
