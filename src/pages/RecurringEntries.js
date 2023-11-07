import React,{useState,useRef} from 'react'
import RENavbar from '../components/RecurringEntries/RENavbar';
import REForms from '../components/RecurringEntries/REForms';

const  RecurringEntries = () => {
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState([]);
    const tableRef = useRef(null);
    
    // const [selectedInput, setSelectedInput] = useState(accountsRecievable);
    return (
      <div className="font-roborto shadow-sm">
      <RENavbar/> 
        <main className="p-3">
          <REForms/>
        </main>
      </div>)
}

export default RecurringEntries