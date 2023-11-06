import React from "react";
import { MdAddCircle } from "react-icons/md";

const tableHeaders = [
  { id: 1, item: "Posting Key" },
  { id: 2, item: "Amt. Local Currency" },
  { id: 3, item: "Amount" },
  { id: 4, item: "Tax code" },
  { id: 5, item: "Assignment" },
  { id: 6, item: "Cost Center" },
  { id: 7, item: "Profile Center" },
  { id: 8, item: "Material RT" },
  { id: 9, item: "Distribution Channel" },
  { id: 10, item: "Order" },
  { id: 11, item: "Network" },
  { id: 12, item: "Business Area" },
  { id: 13, item: "GL Account" },
  { id: 14, item: "Tax Jurisdisction code" },
];

const tableRow = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const MUTable = () => {

  
  return (
    <div className="mx-5">
      <div className="flex flex-row justify-between items-center py-4">
        <h2 className="text-xl font-semibold  text-[#1D1D11] ">Line Items</h2>
        <button className="btn-white btn-icon">
          <MdAddCircle /> Add Row
        </button>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-black bg-blue-200 ">
              <tr>
                {tableHeaders.map(({ id, item }) => (
                  <th key={id} scope="col" className="px-6 py-3">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRow?.map((item, index) => {
                return (
                  <tr key={index} className="bg-white border-b text-gray-900 border-gray-200">
                    <th className="px-6 py-4"> {index}</th>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                    <td className="px-6 py-4">Assignment</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MUTable;
