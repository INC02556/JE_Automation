import React from "react";
import { Link } from "react-router-dom";
// import {BsJournalBookmarkFill} from "react-icons/bs"

const MainPage = () => {
  return (
    <div className="">
      <div className="mt-2 p-2 border-y-[1px] bg-[#eff4f5ff] border-gray-400">
        <h1 className="text-5xl ml-5">Journal Entry Automation</h1>
      </div>

      <br />
      <div className="mx-5 grid grid-cols-3">
        <Link to="/manualjournal">
          <div className="cursor-pointer p-6 bg-blue-200 box-border text-slate-600 rounded w-60 h-60 text-center font-semibold text-3xl">
            Manual journal
            {/* <span className="text-4xl ml-5"><BsJournalBookmarkFill/></span> */}
          </div>
        </Link>
        <Link to="/JournalEntry">
          <div className="cursor-pointer p-6 bg-blue-200 box-border text-slate-600 rounded w-60 h-60 text-center font-semibold text-3xl">
            Journal Entry
            {/* <span className="text-4xl ml-5"><BsJournalBookmarkFill/></span> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
