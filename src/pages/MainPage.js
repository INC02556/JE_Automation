import React from "react";
import { Link } from "react-router-dom";
import {
  BsJournalBookmarkFill,
  BsFillFileEarmarkSpreadsheetFill,
} from "react-icons/bs";
import { TfiSettings } from "react-icons/tfi";
import { AiOutlineEdit } from "react-icons/ai";
import { TbFileUpload } from "react-icons/tb";
import { FaFileUpload } from "react-icons/fa";
import {BsFillFileEarmarkTextFill} from "react-icons/bs"
import { BsFileEarmarkCheckFill } from "react-icons/bs";

const MainPage = () => {
  return (
    <div className="">
      <div className="mt-2 p-2 border-y-[1px] bg-[#eff4f5ff] border-gray-400">
        <h1 className="text-5xl ml-5">Journal Entry Automation</h1>
      </div>

      <br />
      <div className="mx-10 grid grid-cols-5 gap-5 h-60 ">
        <Link to="/manual-journal" className="">
          <div className="tile-box">
            <h2 className="tile-title"> Manual journal</h2>
            <BsJournalBookmarkFill className="tile-icon" />
          </div>
        </Link>
        <Link to="/journal-entry">
          <div className="tile-box">
            <h2 className="tile-title"> Journal Entry</h2>
            <AiOutlineEdit className="tile-icon" />
          </div>
        </Link>

        <Link to="/mass-upload">
          <div className="tile-box">
            <h2 className="tile-title"> Mass Upload</h2>
            <BsFillFileEarmarkSpreadsheetFill className="tile-icon" />
          </div>
        </Link>

        <Link to="/single-upload">
          <div className="tile-box">
            <h2 className="tile-title">Single Upload</h2>
            <TbFileUpload className="tile-icon" />
          </div>
        </Link>
        <Link to="/single-upload-fbd1">
          <div className="tile-box">
            <h2 className="tile-title">Single Upload(FBD01)</h2>
            <FaFileUpload className="tile-icon" />
          </div>
        </Link>
        <Link to="/reference-doc-fbr2">
          <div className="tile-box">
            <h2 className="tile-title">Reference Doc(FBR2)</h2>
            <BsFillFileEarmarkTextFill className="tile-icon" />
          </div>
        </Link>
        <Link to="/reversal-fb08">
          <div className="tile-box">
            <h2 className="tile-title">Reversal Doc(FB08)</h2>
            <BsFileEarmarkCheckFill className="tile-icon" />
          </div>
        </Link>

        
      </div>
    </div>
  );
};

export default MainPage;
