import React from 'react'

import { IoDocumentText } from "react-icons/io5";
import { TfiUpload } from "react-icons/tfi";
import { ImAttachment } from "react-icons/im";


const MJNavbar = () => {
  return (
    <nav className="mt-10 p-2 border-y-[1px] bg-[#eff4f5ff] border-gray-400 ">
          <div className="flex flex-row justify-between  items-center">
            <h2 className="text-xl text-[#1D1D11] ">Manual Journal</h2>
  
            <div className=" flex flex-row gap-3 text-sm">
              <button class="btn-white btn-icon">
                <IoDocumentText /> Download Template
              </button>
              <button class="btn-white btn-icon">
                {" "}
                <TfiUpload /> Upload Template
              </button>
              <button class="btn-white btn-icon">
                {" "}
                <ImAttachment /> Attachment
              </button>
              <button class="btn-white ">Clear</button>
  
              <button class="btn-blue">Simulate</button>
              <button class="btn-blue opacity-50 cursor-not-allowed">Submit</button>
            </div>
          </div>
        </nav>
  )
}

export default MJNavbar