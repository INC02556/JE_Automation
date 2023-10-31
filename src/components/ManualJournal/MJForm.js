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

const MJForm = ({ data ,setUpdateData }) => {
  const headerdata = data[0]
  function updateHeaderData(e,int){
    const updateData = data
    updateData[0][int] = e.target.value
    setUpdateData(updateData)
  }

  return (
    <div className="mt-5">
      <h2 className="text-2xl mb-5 font-semibold ">
        General Ledger Manual Process
      </h2>
      <form className="grid grid-cols-3 gap-x-10 gap-y-5 text-black text-sm">
        {generalLedger?.map((int, index) => {
          return (
            <div key={index}>
              <label className="">{int}</label>
              
                <input
                  id="GLMPinput"
                  name={int}
                  defaultValue={headerdata ? headerdata[int] : "" }
                  className=" "
                  onChange={(e) => updateHeaderData(e,int)}
                  type="text"
                />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default MJForm;
