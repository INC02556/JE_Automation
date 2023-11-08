import React, { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { TfiUpload } from "react-icons/tfi";
import { ImAttachment } from "react-icons/im";
import SUFormTabs from "./SUFormTabs";
import SUTable from "./SUTable";

const SUForms = () => {
  return (
    <div>
      <div className="justify-end flex flex-col sm:flex-row gap-1 box-border  "></div>
      <div className="border-box mt-3">
        <SUFormTabs />
      </div>
      <div className="border-box mt-3">
        <SUTable />
      </div>
    </div>
  );
};

export default SUForms;
