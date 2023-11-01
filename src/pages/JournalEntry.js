import React,{useState,useRef} from 'react'
import JENavbar from '../components/JournalEntry.js/JENavbar';

const JournalEntry = () => {
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState([]);
    const tableRef = useRef(null);
    
    // const [selectedInput, setSelectedInput] = useState(accountsRecievable);
    return (
      <div className="font-roborto shadow-sm">
      <JENavbar/> 
        <main className="p-3 ">
          
          {/* <div>
              <div>
                <label>Select Process</label>
              </div>
    
              <select className="">
                <option>Accounts Payable Manual Process</option>
                <option>Accounts Recievable Manual Process</option>
                <option>General Ledger Manual Process</option>
              </select>
            </div> */}
  
          
        </main>
      </div>)
}

export default JournalEntry