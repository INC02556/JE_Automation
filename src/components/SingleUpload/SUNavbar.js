import React from "react";
import { FaBars } from "react-icons/fa";
import SILogo from "../../tools/images/SILogo.jpg";
import Avatar from "react-avatar";
import { ImCross } from "react-icons/im";
import { IoDocumentText } from "react-icons/io5";
import { TfiUpload } from "react-icons/tfi";
import { ImAttachment } from "react-icons/im";

const SUNavbar = () => {
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
            src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/34217-MLS-Fabian-Ekker-003flin.jpg"
          />
        </div>
      </div>
      <nav className="flex sm:justify-between xs:flex-row flex-col sm:items-center px-10 py-5 bg-[#EFF4F5] mb-3">
        <h2
          className="text-2xl font-semibold text-black"
          href="#pablo"
        >
          Journal Entry
        </h2>
        <ul className="flex lg:flex-row list-none lg:ml-auto gap-2 ml-auto ">
          <li className="nav-item">
            <button className="btn-white btn-icon text-sm">
              {" "}
              <ImAttachment /> Attachment
            </button>
          </li>
          <li className="nav-item">
            <button className="btn-white btn-icon text-sm">
              <TfiUpload /> Upload Template
            </button>
          </li>
          <li className="nav-item">
            <button className="btn-white btn-icon text-sm">
              <IoDocumentText /> Download Template
            </button>
          </li>
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
      </nav>
    </>
  );
};

export default SUNavbar;
