import React,{useState,useRef} from 'react'
import SUNavbar from '../components/SingleUpload/SUNavbar';
import SUForms from '../components/SingleUpload/SUForms';

const  SingleUpload = () => {
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState([]);
    const tableRef = useRef(null);
    
    // const [selectedInput, setSelectedInput] = useState(accountsRecievable);
    return (
      <div className="font-roborto shadow-sm">
      <SUNavbar/> 
        <main className="p-3">
          <SUForms/>
        </main>
      </div>)
}

export default SingleUpload