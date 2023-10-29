import React from 'react'
import MJNavbar from '../components/ManualJournal/MJNavbar';
import MJForm from '../components/ManualJournal/MJForm';
import MJTable from '../components/ManualJournal/MJTable';

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



const ManualJournal = () => {
    // const [selectedInput, setSelectedInput] = useState(accountsRecievable);
    return (
      <div className="mx-5 font-roborto">
        <MJNavbar/>
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
  
         <MJForm/>
          <MJTable/>
        </main>
      </div>
    );
}

export default ManualJournal