import { Routes,Route } from 'react-router';
import './App.css';
import MainPage from './pages/MainPage';
import ManualJournal from './pages/ManualJournal';
import JournalEntry from './pages/JournalEntry';
import Massupload from './pages/Massupload';
import SingleUpload from './pages/SingleUpload';
import RecurringEntries from './pages/RecurringEntries';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="manual-journal" element={<ManualJournal />}></Route>
      <Route path="journal-entry" element={<JournalEntry/>}></Route>
      <Route path="mass-upload" element={<Massupload/>}></Route>
      <Route path="single-upload" element={<SingleUpload/>}></Route>
      <Route path="single-upload-fbd1"element={<RecurringEntries />}></Route>
    </Routes>
  );
}

export default App;
