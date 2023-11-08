import React from "react";
import RDNavbar from "../components/ReferenceDoc/RDNavbar";
import RDFormTabs from "../components/ReferenceDoc/RDFormTabs";
import RDTable from "../components/ReferenceDoc/RDTable";

const ReferenceDoc = () => {
  return (
    <div className="font-roborto shadow-sm">
      <RDNavbar />
      <main className="p-3 ">
        <div className="border-box mt-3">
          <RDFormTabs />
        </div>
        <div className="border-box mt-3">
          <RDTable />
        </div>
      </main>
    </div>
  );
};

export default ReferenceDoc;
