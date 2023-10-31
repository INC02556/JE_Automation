import React from "react";

const MTInputs = () => {
  const MJINputfields = [
    { id: 1, fieldName: "Company Code" },
    { id: 2, fieldName: "Period" },
    { id: 3, fieldName: "Ledger Group" },
    { id: 4, fieldName: "Document Type" },
    { id: 5, fieldName: "Reference" },
    { id: 6, fieldName: "Exchange Rate" },
    { id: 7, fieldName: "Document Date" },
    { id: 8, fieldName: "Document Header Text" },
    { id: 9, fieldName: "Posting Date" },
    { id: 10, fieldName: "Currency" },
  ];
  return (
    <div className="mx-6 mt-4 font-roborto">
      <h1 className="text-2xl">Select Process</h1>
      <form action="">
        <select
          id="currency"
          name="currency"
          className="h-full mt-5 p-4 rounded-md border border-slate-300 bg-transparent py-2 px-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          
          <option>General Ledger Manual Process</option>
        </select>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5 ">
          {MJINputfields.map(({id,fieldName})=>(
            <div key={id}>
            <label
              for="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {fieldName}
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                className="block md:w-10/12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          ))}
          
        </div>
      </form>
    </div>
  );
};

export default MTInputs;
