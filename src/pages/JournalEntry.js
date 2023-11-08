import React, { useState, useRef } from "react";
import JENavbar from "../components/JournalEntry/JENavbar";
// import JEForms from '../components/JournalEntry/JEForms'
import JETable from "../components/JournalEntry/JETable";
import JEFormTabs from "../components/JournalEntry/JEFormTabs";

const JournalEntry = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const tableRef = useRef(null);

  // const [selectedInput, setSelectedInput] = useState(accountsRecievable);
  return (
    <div className="font-roborto shadow-sm">
      <JENavbar />
      <main className="p-3 ">
        <div className="border-box mt-3">
          <JEFormTabs />
        </div>

        <div className="border-box mt-3">
          <JETable />
        </div>
      </main>
    </div>
  );
};

export default JournalEntry;
