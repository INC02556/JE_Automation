import React from "react";
import { FaBars } from "react-icons/fa";
import SILogo from "../../tools/images/SILogo.jpg";
import Avatar from "react-avatar";
import { ImCross } from "react-icons/im";
import { IoDocumentText } from "react-icons/io5";
import { TfiUpload } from "react-icons/tfi";
import { ImAttachment } from "react-icons/im";
import {TiUpload} from "react-icons/ti"

const RVDNavbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
        <div className="relative flex flex-wrap">
          <div className="m-5">
            <img src={SILogo} alt="" srcset="" />
          </div>
          <div className="m-3 ml-auto">
            <Avatar
              value="86%"
              size="40"
              round
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbpKeeGDLuC0SW1RvHziiFoQjVKIZo3EoOA&usqp=CAU"
            />
          </div>
        </div>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#EFF4F5] mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full  flex xs:justify-between xs:flex-row flex-col xs:items-center">
              <h2
                className="text-2xl font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
                href="#pablo"
              >
                Journal Entry
              </h2>
              {/* <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <ImCross /> : <FaBars />}
              </button> */}
  
              {/* <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            > */}
              <ul className="flex lg:flex-row list-none lg:ml-auto gap-2 ml-auto ">
          <li className="nav-item">
            <button className="btn-white btn-icon text-sm">
              {" "}
              <ImAttachment /> Attachment
            </button>
          </li>
          <li className="nav-item">
            <button className="btn-white btn-icon text-sm">
              {" "}
              <TiUpload /> Mass Reversal
            </button>
          </li>
          {/* <li className="nav-item">
            <button className="btn-white btn-icon text-sm">
              <TfiUpload /> Upload Template
            </button>
          </li>
          <li className="nav-item">
            <button className="btn-white btn-icon text-sm">
              <IoDocumentText /> Download Template
            </button>
          </li> */}
          <li className="nav-item">
            <button className="btn-white  text-sm">Clear</button>
          </li>
          <li className="nav-item">
            <button className="btn-white text-sm">Simulate</button>
          </li>

          <li className="nav-item">
            <button className="btn-blue text-sm">Submit</button>
          </li>
        </ul>
              {/* </div> */}
            </div>
          </div>
        </nav>
      </>
    );
}

export default RVDNavbar