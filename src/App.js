import "./App.css";
import { IoDocumentText } from "react-icons/io5";
import { TfiUpload } from "react-icons/tfi";
import { ImAttachment } from "react-icons/im";
import { useState } from "react";

const accountsRecievable = [
  "Company Code",
  "Customer",
  "Document Date",
  "Baseline Date",
  "Posting Date",
  "Period",
  "Reference",
  "Customer Description",
  "Tax Code",
  "Document Header Text",
  "Special GL Indicator",
  "Currency",
  "Exchange Rate",
  "Calculate Tax",
  "Document Type",
  "Payment Term",
  "Payment Block",
  "Credit Control Area",
];

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

const accountsPayable = [
  "Company Code",
  "Vendor",
  "Document Date",
  "Baseline Date",
  "Posting Date",
  "Period",
  "Reference",
  "Document Header Text",
  "Vendor Description",
  "Currency",
  "Tax Code",
  "Special GL Indicator",
  "Exchange Rate",
  "Calculate Tax",
  "Document Type",
  "Payment Term",
  "Payment Method",
  "Payment Block",
  "House Bank",
  "House Bank Account ID",
  "Partner Bank Type",
];

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
function App() {
  const [selectedInput, setSelectedInput] = useState(accountsRecievable);
  return (
    <div className="mx-5">
      <nav className="mt-10 p-2 border-y-[1px] bg-[#eff4f5ff] border-gray-400 ">
        <div className="flex flex-row justify-between  items-center">
          <h2 className="text-xl text-[#1D1D11] ">Manual Journal</h2>

          <div className=" flex flex-row gap-3 text-sm">
            <button class="btn-white btn-icon">
              <IoDocumentText /> Download Template
            </button>
            <button class="btn-white btn-icon">
              {" "}
              <TfiUpload /> Upload Template
            </button>
            <button class="btn-white btn-icon">
              {" "}
              <ImAttachment /> Attachment
            </button>
            <button class="btn-white ">Clear</button>

            <button class="btn-blue">Simulate</button>
            <button class="btn-blue opacity-50 cursor-not-allowed">Submit</button>
          </div>
        </div>
      </nav>
      <main className="p-3 ">
        <p className="text-gray-600 inline-flex gap-2 text-sm">
          <strong>Note:</strong>
          <span>
            Please Upload the template to start the Manual Journal process. If
            you require the template , please choose the required process and/or
            sub-process and click on Download Template. ***Line items entered
            can not exceed 999***
          </span>
        </p>
        {/* <div>
          <div>
            <label>Select Process</label>
          </div>

          <select className="">
            <option>Accounts Payable Manual Process</option>
            <option>Accounts Recievable Manual Process</option>
            <option>General Ledger Manual Process</option>
          </select>
        </div> */}

        <div className="mt-5">
          <h2 className="text-2xl mb-5 font-semibold ">
            General Ledger Manual Process
          </h2>
          <from className="grid grid-cols-3 gap-x-10 gap-y-5 text-black text-sm">
            {generalLedger?.map((int, index) => {
              return (
                <div>
                  <label class="">{int}</label>
                  <input class=" " type="text" />
                </div>
              );
            })}
          </from>
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-semibold  text-[#1D1D11] mb-3">
            Item Details
          </h2>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-[#E6E6E6">
              <thead className="">
                <tr className="bg-[#DFEAFB]">
                  {tableHeader?.map((item, index) => {
                    return (
                      <th
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
                <tr style={{ display: "table-row" }}>
                  <td colspan={tableHeader.length} className="text-center p-3">
                    Please Upload Template to load data
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>

          </div>
          <div className="flex flex-row gap-4  justify-center text-sm mt-3">
            <button class="btn-white ">First</button>
            <button class="btn-white opacity-50 cursor-not-allowed" disabled="true">Previous</button>
            <button class="btn-white opacity-50 cursor-not-allowed">Next</button>
            <button class="btn-white ">Last</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
