import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MTInputs from "./components/MTInputs";
import MJTable from "./components/MJTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex mx-4 font-roborto">

       <p className="font-bold text-gray-500">Note:</p> 
      <p className="ml-2 text-gray-500">
        Please Upload the template to start the Manual Journal process. If you
        require the template , please choose the required process and/or
        sub-process and click on Download Template. ***Line items entered can
        not exceed 999***
      </p>
      </div>
      <MTInputs/>
      <MJTable/>
    </>
  );
}

export default App;
