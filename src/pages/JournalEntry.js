import React,{useState,useRef} from 'react'
import JENavbar from '../components/JournalEntry/JENavbar';
import JEForms from '../components/JournalEntry/JEForms'

const JournalEntry = () => {
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState([]);
    const tableRef = useRef(null);
    
    // const [selectedInput, setSelectedInput] = useState(accountsRecievable);
    return (
      <div className="font-roborto shadow-sm">
      <JENavbar/> 
        <main className="p-3 ">
          <JEForms/>
        </main>
      </div>)
}

export default JournalEntry