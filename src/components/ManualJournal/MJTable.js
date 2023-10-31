import React from "react";
import * as XLSX from "xlsx";

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

const MJTable = ({ tabledata, tableRef }) => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold  text-[#1D1D11] mb-3">
        Item Details
      </h2>
      <div className="overflow-x-auto">
        <table
          className="border-collapse border border-[#E6E6E6"
          ref={tableRef}
        >
          <thead className="">
            <tr className="bg-[#DFEAFB]">
              {tableHeader?.map((item, index) => {
                return (
                  <th key={index}
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
            {!tabledata ? (
              <tr style={{ display: "table-row" }}>
                <td colSpan={tableHeader.length} className="text-center p-3">
                  Please Upload Template to load data
                </td>
              </tr>
            ) : (
              tabledata?.map((row, index) => (
                <tr
                  className="bg-white border-b  dark:border-gray-700"
                  key={index}
                >
                  {Object.values(row).map((value, index) => (
                    <td
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      key={index}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div></div>
      <div className="flex flex-row gap-4  justify-center text-sm mt-3">
        <button className="btn-white ">First</button>
        <button className="btn-white opacity-50 cursor-not-allowed" disabled={true}>
          Previous
        </button>
        <button className="btn-white opacity-50 cursor-not-allowed">Next</button>
        <button className="btn-white ">Last</button>
      </div>
    </section>
  );
};

export default MJTable;
