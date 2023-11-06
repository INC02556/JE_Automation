import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router';
import MainPage from './pages/MainPage';
import ManualJournal from './pages/ManualJournal';
import JournalEntry from './pages/JournalEntry';
import Massupload from './pages/Massupload';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="manual-journal" element={<ManualJournal />}></Route>
      <Route path="journal-entry" element={<JournalEntry/>}></Route>
      <Route path="mass-upload" element={<Massupload/>}></Route>
    </Routes>
  );
}

export default App;
