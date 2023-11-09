import React,{useState} from 'react'
import RVDNavbar from '../components/ReversalDoc/RVDNavbar'
import RVDFormTabs from '../components/ReversalDoc/RVDFormTabs'
import RVDTable from '../components/ReversalDoc/RVDTable'

const ReversalDoc = () => {
  const [tableRow,setTablleRow] = useState([])
  return (
    <div className="font-roborto shadow-sm">
    <RVDNavbar />
    <main className="p-3 ">
      <div className="border-box mt-3">
        <RVDFormTabs setTablleRow={setTablleRow}/>
      </div>
      <div className="border-box mt-3">
       
        {tableRow.length !==0 ?  (<RVDTable tableRow={tableRow} />) : ""}
      </div>
    </main>
  </div>
  )
}

export default ReversalDoc