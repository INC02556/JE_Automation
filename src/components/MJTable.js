import React from "react";

const tableHeaders = [
  { id: 1, headerName: "Posting Key" },
  { id: 2, headerName: "G/L Account" },
  { id: 3, headerName: "Amount" },
  { id: 4, headerName: "Text" },
  { id: 5, headerName: "Assignment" },
  { id: 6, headerName: "Cost Center" },
  { id: 7, headerName: "Profit Center" },
  { id: 8, headerName: "Trading Partner" },
  { id: 9, headerName: "WBS Element" },
  { id: 10, headerName: "Customer Code" },
  { id: 11, headerName: "Vendor Code" },
  { id: 12, headerName: "Material/Item Code" },
  { id: 13, headerName: "Distribution Channel" },
  { id: 14, headerName: "Distribution Channel" },
  { id: 15, headerName: "Division" },
  { id: 15, headerName: "Personal No" },
  { id: 16, headerName: "Customer Group(CO-PA)" },
  { id: 17, headerName: "Customer Industry(CO-PA)" },
  { id: 18, headerName: "Customer Country (CO-PA)" },
  { id: 19, headerName: "Sales District (CO-PA)" },
  { id: 20, headerName: "Product (CO-PA)" },
  { id: 21, headerName: "Material Group (CO-PA)" },
  { id: 22, headerName: "Sales Organization (CO-PA)" },
  { id: 23, headerName: "Distribution Channel (CO-PA)" },
  { id: 24, headerName: "Division (CO-PA)" },
  { id: 24, headerName: "Division (CO-PA)" },
  { id: 25, headerName: "Plant (CO-PA)" },
  { id: 26, headerName: "Profit Center (CO-PA)" },
  { id: 27, headerName: "Bill-To Party (CO-PA)" },
  { id: 28, headerName: "Amount in Local Currency" },
  { id: 29, headerName: "Currency" },
  { id: 30, headerName: "Order" },
  { id: 31, headerName: "Network" },
  { id: 32, headerName: "Brand" },
  { id: 33, headerName: "Sales Employee" },
];

const MJTable = () => {
  return (
    <div className="mt-6 mx-5 ">
      <span className="text-2xl font-roborto">Item details</span>
      <div className="mt-4 overflow-x-auto">
        <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="font-roborto text-sm text-black  bg-gray-50 dark:bg-blue-100 ">
            <tr>
              {tableHeaders.map(({ id, headerName }) => (
                <th key={id} scope="col" className="px-8 py-4 font-medium">
                  {headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              ></th>
              <td className="px-6 py-4 text-gray-900"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MJTable;
