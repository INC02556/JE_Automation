import React from "react";
import { MdAddCircle } from "react-icons/md";

const tableHeaders = [
  { id: 1, item: "Posting Key" },
  { id: 2, item: "Assignment" },
  { id: 3, item: "Doc. Type" },
  { id: 4, item: "Doc. Number" },
  { id: 5, item: "Posting Date" },
  { id: 6, item: "Doc. Date" },
  { id: 7, item: "Amount" },
];

const JETable = () => {
  return (
    <div className="mx-5">
      <div className="flex flex-row justify-between items-center py-3">
        <h2 className="text-xl font-semibold  text-[#1D1D11] ">Line Items</h2>
      </div>
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-md">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-sm text-black bg-blue-200 ">
              <tr>
                {tableHeaders.map(({ id, item }) => (
                  <th key={id} scope="col" class="px-6 py-3">
                    {item}
                  </th>
                ))}
                {/* <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b text-gray-900 border-gray-200">
                <th
                  
                  class="px-6 py-4 "
                >
                  01
                </th>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
              </tr>
              <tr class="bg-white border-b text-gray-900 border-gray-200">
                <th
                  
                  class="px-6 py-4 "
                >
                  02
                </th>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
                <td class="px-6 py-4">Assignment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JETable;
