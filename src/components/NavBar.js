import React, { useState } from "react";
import { FaBars, FaDownload, FaUpload } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr"
import {MdUploadFile} from "react-icons/md"


const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-200 mb-3 border border-b-stone-400 font-roborto">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-3xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize text-black"
                href="#pablo"
              >
                Manual Journey
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaBars />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className=" px-3 py-2 flex items-center text-sm capitalize leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="bg-white border border-blue-400 flex rounded text-black p-2">
                      <div className="text-base">
                      <MdUploadFile />
                      </div>
                      
                      <span className="ml-2">Upload Template</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" px-3 py-2 flex items-center text-sm capitalize leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="bg-white border border-blue-400 flex rounded text-black p-2">
                      <FaDownload />
                      <span className="ml-3">Download Template</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" px-3 py-2 flex items-center text-sm capitalize leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="bg-white flex border border-blue-400 rounded text-black p-2">
                    <GrAttachment/>
                    <span className="ml-3">Attachment</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" px-3 py-2 flex items-center text-sm capitalize font-medium leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="bg-white border border-blue-400 rounded text-black p-2">
                      Clear
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" px-3 py-2 flex items-center text-sm capitalize font-medium leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="bg-blue-600 rounded text-white p-2">
                      Simulate
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" px-3 py-2 flex items-center text-sm capitalize font-medium leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="bg-blue-600 rounded text-white p-2">
                      Submit
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar