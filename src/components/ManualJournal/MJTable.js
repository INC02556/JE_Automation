import React, { useState } from "react";
import * as XLSX from "xlsx";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const tableHeader = [
  "Posting Key",
  "G/L Account",
  "Amount",
  "Text",
  "Assignment",
  "Cost Center",
  "Profit Center",
  "Trading Partner",
  "WBS Element",
  "Customer Code",
  "Vendor Code",
  "Material/Item Code",
  "Distribution Channel",
  "Division",
  "Personal No",
  "Customer Group(CO-PA)",
  "Customer Industry(CO-PA)",
  "Customer Country (CO-PA)",
  "Sales District (CO-PA)",
  "Product (CO-PA)",
  "Material Group (CO-PA)",
  "Sales Organization (CO-PA)",
  "Distribution Channel (CO-PA)",
  "Division (CO-PA)",
  "Plant (CO-PA)",
  "Profit Center (CO-PA)",
  "Bill-To Party (CO-PA)",
  "Amount in Local Currency",
  "Currency",
  "Order",
  "Network",
  "Brand",
  "Sales Employee",
];

const MJTable = ({ data, setData, setUpdateData, tableRef }) => {
  const [enableEdit, setEnableEdit] = useState(null);

  const enableRowForEdit = (index) => {
    setEnableEdit(index);
  };
  function handleInputChange(e, rowIndex, columnIndex) {
    const updateData = data;
    updateData[columnIndex][rowIndex] = e.target.value;
    setUpdateData(updateData);
  }
  const handleAddRow = () => {
    const newRow = data[data.length - 1];
    Object.keys(newRow).map((key, index) => {
      newRow[key] = "";
    });
    setData([...data, newRow]);
  };
  function handleDeleteRow(index) {
    console.log(index + 2);
    const updatedData = [...data];
    updatedData.splice(index + 2, 1);
    setData(updatedData);
  }
  return (
    <section className="mt-10">
      <div className="flex flex-row justify-between items-center py-3">
        <h2 className="text-2xl font-semibold  text-[#1D1D11] ">
          Item Details
        </h2>
        {data.slice(2).length ? (
          <button
            className="btn-white btn-icon"
            onClick={() => {
              handleAddRow();
            }}
          >
            <MdAddCircle /> Add Row
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="overflow-x-auto">
        <table
          className="border-collapse border border-[#E6E6E6"
          ref={tableRef}
        >
          <thead className="">
            <tr className="bg-[#DFEAFB]">
              <th
                style={{ whiteSpace: "nowrap" }}
                className=" p-2  text-sm font-medium border border-[#E6E6E6"
              >
                Action
              </th>
              {tableHeader?.map((item, index) => {
                return (
                  <th
                    key={index}
                    style={{ whiteSpace: "nowrap" }}
                    className=" p-2  text-sm font-medium border border-[#E6E6E6"
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {!data.slice(2) ? (
              <tr style={{ display: "table-row" }}>
                <td colSpan={tableHeader.length} className="text-center p-3">
                  Please Upload Template to load data
                </td>
              </tr>
            ) : (
              data.slice(2)?.map((row, columnIndex) => (
                <tr
                  className="bg-white border-b  dark:border-gray-700"
                  key={columnIndex}
                >
                  <td className="px-3 py-4 font-medium flex justify-center gap-3 text-xl text-blue-500  whitespace-nowrap ">
                    <button
                      onClick={() => handleDeleteRow(columnIndex)}
                    >
                      {" "}
                      <RiDeleteBin6Line />
                    </button>
                    <button
                      onClick={() => enableRowForEdit(columnIndex)}
                    >
                      {" "}
                      <FaEdit />
                    </button>
                  </td>
                  {Object.keys(row).map((key, rowIndex) => {
                    if (rowIndex !== 0) {
                      return (
                        <td
                          className="px-1 py-4 font-medium text-gray-900 whitespace-nowrap"
                          key={rowIndex}
                        >
                          {enableEdit !== columnIndex ? (
                            row[key]
                          ) : (
                            <input
                              type="text"
                              value={row[key]}
                              onChange={(e) =>
                                handleInputChange(e, key, columnIndex + 2)
                              }
                            />
                          )}
                          
                        </td>
                      );
                    }
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div></div>
      <div className="flex flex-row gap-4  justify-center text-sm mt-3">
        <button className="btn-white ">First</button>
        <button
          className="btn-white opacity-50 cursor-not-allowed"
          disabled={true}
        >
          Previous
        </button>
        <button className="btn-white opacity-50 cursor-not-allowed">
          Next
        </button>
        <button className="btn-white ">Last</button>
      </div>
    </section>
  );
};

export default MJTable;
