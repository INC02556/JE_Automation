import React, { useState } from "react";
import RDNavbar from "../components/ReferenceDoc/RDNavbar";
import RDFormTabs from "../components/ReferenceDoc/RDFormTabs";
import RDTable from "../components/ReferenceDoc/RDTable";

const ReferenceDoc = () => {
  const [tableRow,setTablleRow] = useState([])
  return (
    <div className="font-roborto shadow-sm">
      <RDNavbar />
      <main className="p-3 ">
        <div className="border-box mt-3">
          <RDFormTabs  setTablleRow={setTablleRow} />
        </div>
        <div className="border-box mt-3">
        {tableRow.length !==0 ?  (<RDTable tableRow={tableRow} />) : ""}
        </div>
      </main>
    </div>
  );
};

export default ReferenceDoc;
