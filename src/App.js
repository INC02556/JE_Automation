import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router';
import MainPage from './pages/MainPage';
import ManualJournal from './pages/ManualJournal';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="manualjournal" element={<ManualJournal />}></Route>
    </Routes>
  );
}

export default App;
