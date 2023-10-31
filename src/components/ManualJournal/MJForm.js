import React from "react";

const generalLedger = [
  "Company Code",
  "Document Type",
  "Document Date",
  "Posting Date",
  "Period",
  "Reference",
  "Document Header Text",
  "Currency",
  "Ledger Group",
  "Exchange Rate",
];

const MJForm = ({ headerdata  }) => {

  return (
    <div className="mt-5">
      <h2 className="text-2xl mb-5 font-semibold ">
        General Ledger Manual Process
      </h2>
      <form className="grid grid-cols-3 gap-x-10 gap-y-5 text-black text-sm">
        {/* {generalLedger?.map((int, index) => {
          return (
            <div key={index}>
              <label className="">{int}</label>
              {data[0] ? (
                <input
                  id="GLMPinput"
                  defaultValue={data[0] && data[0][int]}
                  className=" "
                  type="text"
                />
              ) : (
                <input
                  id="GLMPinput"
                  defaultValue=""
                  className=" "
                  type="text"
                />
              )}
            </div>
          );
        })} */}
        
        {generalLedger?.map((int, index) => {
          return (
            <div key={index}>
              <label className="">{int}</label>
              
                <input
                  id="GLMPinput"
                  defaultValue={headerdata ? headerdata[int] : "" }
                  className=" "
                  type="text"
                />
            </div>
          );
        })}




      </form>


      {/* {header &&  Object.values(header)?.map((hitem, index) => {
          return (
            <div key={index}>
              <label className="">{hitem}</label>
                <input
                  id="GLMPinput"
                  value={headerData.hitem}
                  className=" "
                  type="text"
                />
            </div>
          );
        })} */}
    </div>
  );
};

export default MJForm;
