import React,{useState,useRef} from 'react'
import MUNavbar from '../components/MassUpload/MUNavbar';
import MUForms from '../components/MassUpload/MUForms';

const Massupload = () => {
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState([]);
    const tableRef = useRef(null);
    
    // const [selectedInput, setSelectedInput] = useState(accountsRecievable);
    return (
      <div className="font-roborto shadow-sm">
      <MUNavbar/> 
        <main className="p-3">
          <MUForms/>
        </main>
      </div>)
}

export default Massupload