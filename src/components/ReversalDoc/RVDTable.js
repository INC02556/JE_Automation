import React,{useState,useMemo} from 'react'
import { FaEdit } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../utils/Pagination";

const tableHeaders = [
    { id: 1, item: "Posting Key" },
    { id: 2, item: "Assignment" },
    { id: 3, item: "Doc. Type" },
    { id: 4, item: "Doc. Number" },
    { id: 5, item: "Posting Date" },
    { id: 6, item: "Doc. Date" },
    { id: 7, item: "Amount" },
  ];
  
  const tableRow = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  
  let PageSize = 2;

const RVDTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return tableRow.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
      <div className="mx-5">
        <div className="flex flex-row justify-between items-center py-4">
          <h2 className="text-xl font-semibold  text-[#1D1D11] ">Line Items</h2>
          {/* <button className="btn-white btn-icon">
            <MdAddCircle /> Add Row
          </button> */}
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
                  {/* <th scope="col" className="px-6 py-3">
                    {" "}
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {currentTableData?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b text-gray-900 border-gray-200"
                    >
                      <th className="px-6 py-4"> {item}</th>
                      <td className="px-6 py-4">Assignment</td>
                      <td className="px-6 py-4">Assignment</td>
                      <td className="px-6 py-4">Assignment</td>
                      <td className="px-6 py-4">Assignment</td>
                      <td className="px-6 py-4">Assignment</td>
                      <td className="px-6 py-4">Assignment</td>
  
                      {/* <td className="px-6 py-4 font-medium flex justify-center gap-3 text-xl text-blue-500  whitespace-nowrap ">
                        <button>
                          <RiDeleteBin6Line />
                        </button>
                        <button>
                          <FaEdit />
                        </button>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-5 mb-10">
  
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={tableRow.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          </div>
  
        </div>
      </div>
    );
}

export default RVDTable