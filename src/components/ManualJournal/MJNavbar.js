import React, { useRef, useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { TfiUpload } from "react-icons/tfi";
import { ImAttachment } from "react-icons/im";
import * as XLSX from "xlsx";
import ExcelTemplate from "../../tools/files/GL_MJ.xlsx";

const MJNavbar = ({ setData, tableRef }) => {
  const fileInputField = useRef(null);
  const attachInputField = useRef(null);
  const [files, setFiles] = useState([]);

  const handleReset = () => {
    setData([]);
    setFiles([]);
  };
  const uploadAttachment = (e) => {
    new FileReader();
    setFiles([...files, e.target.files[0]]);
  };

  const handleFileUpload = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      setData([]);
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, {
          defval: null,
          raw: false,
        });
        const resultData = {};
        resultData.header = parsedData[0];
        // resultData.headerData = parsedData[1];
        // resultData.tableHeader = parsedData[2];
        resultData.tableItems = parsedData.slice(2);
        setData(resultData);
      };
    }
  };
  const downloadExcelFile = () => {
    const link = document.createElement("a");
    link.href = ExcelTemplate;
    link.download = "GL_MJ.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="mt-10 p-2 border-y-[1px] bg-[#eff4f5ff] border-gray-400 ">
      <div className="flex flex-row justify-between  items-center">
        <h2 className="text-xl text-[#1D1D11] ">Manual Journal</h2>

        <div className=" flex flex-row gap-3 text-sm">
          <button className="btn-white btn-icon" onClick={downloadExcelFile}>
            <IoDocumentText /> Download Template
          </button>
          <button
            className="btn-white btn-icon"
            onClick={() => fileInputField.current.click()}
          >
            {" "}
            <TfiUpload /> Upload Template
          </button>
          <input
            type="file"
            accept=".xlsx, .xls"
            style={{ display: "none" }}
            ref={fileInputField}
            onChange={handleFileUpload}
            placeholder="Upload  File"
          />
          <div className="group   ">
            <button
              className="btn-white btn-icon group h-full"
              onClick={() => attachInputField.current.click()}
            >
              {" "}
              <ImAttachment />{" "}
              {files.length != 0
                ? `Attachment (${files.length})`
                : "Attachment"}
            </button>
            {files.length !== 0 && (
              <ul className="bg-white absolute p-3 text-left text-blue-500 text-lg w-[14rem] shadow-lg hidden group-hover:block">
                {files.map((attach, index) => {
                  return (
                    <li
                      key={index}
                      className="py-1 rounded px-3 hover:bg-blue-500 hover:text-white"
                    >
                      {attach.name}{" "}
                    </li>
                  );
                })}
              </ul>
            )}

            <input
              type="file"
              style={{ display: "none" }}
              ref={attachInputField}
              onChange={uploadAttachment}
              placeholder="Upload  File"
            />
          </div>
          <button className="btn-white " onClick={handleReset}>
            Clear
          </button>

          <button className="btn-blue">Simulate</button>
          <button className="btn-blue opacity-50 cursor-not-allowed">
            Submit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MJNavbar;
