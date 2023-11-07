import React,{useState} from "react";
import { IoDocumentText } from "react-icons/io5";
import { TfiUpload } from "react-icons/tfi";
import { ImAttachment } from "react-icons/im";
import REFormTabs from "./REFormTabs";
import RETable from "./RETable";

const SUForms = () => {
  
  return (
    <div>
      <div className="justify-end flex flex-col sm:flex-row gap-1 box-border  ">
        {/* <button className="btn-white btn-icon text-sm w-fit ml-auto sm:ml-0">
          {" "}
          <TfiUpload /> Upload Template
        </button>
        <button className="btn-blue btn-icon text-sm w-fit ml-auto sm:ml-0">
          {" "}
          <IoDocumentText /> Download Template
        </button> */}
      </div>
      <div className="border-box mt-3">
        <REFormTabs/>
      </div>
      <div className="border-box mt-3">
        <RETable/>
      </div>
    </div>
  );
};


export default SUForms;
