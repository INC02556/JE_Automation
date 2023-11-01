import React from "react";
import { FaBars } from "react-icons/fa";
import SILogo from "../../tools/images/SILogo.jpg";
import Avatar from "react-avatar";
import {ImCross} from "react-icons/im"

const JENavbar = () => {
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
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-bgJournal mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-normal leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="#pablo"
            >
              Journal Entry
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <ImCross /> : <FaBars />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-1">
              <li className="nav-item">
                <button className="btn-white btn-icon text-sm">
                  Download Template
                </button>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <button className="btn-blue text-sm">Simulate</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default JENavbar;
