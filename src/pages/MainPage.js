import React from "react";
import { Link } from "react-router-dom";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { TfiSettings } from "react-icons/tfi";
import { AiOutlineEdit } from "react-icons/ai";

const MainPage = () => {
  return (
    <div className="">
      <div className="mt-2 p-2 border-y-[1px] bg-[#eff4f5ff] border-gray-400">
        <h1 className="text-5xl ml-5">Journal Entry Automation</h1>
      </div>

      <br />
      <div className="mx-5 grid grid-cols-5 gap-10 h-60 ">
        <Link to="/manualjournal" className="">
          <div className="tile-box">
            <h2 className="tile-title"> Manual journal</h2>
            <BsJournalBookmarkFill className="tile-icon" />
          </div>
        </Link>
        <Link to="/JournalEntry">
          <div className="tile-box">
            <h2 className="tile-title"> Journal Entry</h2>
            <AiOutlineEdit className="tile-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
