import React, { useState } from "react";
import logo from "../../assets/removebg.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import frontimg from "../../assets/back123.jpg";
import newlogo from "../../assets/logo_black.png";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdSimCardDownload } from "react-icons/md";
import stamp from "../../assets/Asset.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative bg-cover shadow-md" style={{ backgroundImage: `url(${frontimg})` }}>
      {/* Stamp Image */}
      {/* <img
        src={stamp}
        alt="Sunshine Logo"
        className="absolute top-0 left-0 h-16 md:h-24 z-10"
        style={{ marginLeft: '20px', marginTop: '20px' }}  // Adjust the margins as needed
      /> */}

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-grow flex justify-center md:justify-center">
          <Link to={"/"} className="flex justify-center">
            <img
              src={newlogo}
              alt="Sunshine Logo"
              className="h-52 md:h-72"
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="text-2xl lg:hidden text-black"
          onClick={toggleMenu}
        >
          {isOpen ? <RiCloseLine className="text-red-600" /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Menu */}
      <div className={`text-black ${isOpen ? "block" : "hidden"} lg:block`}>
        <div className="container mx-auto py-5 flex flex-col lg:flex-row md:items-center justify-center bg-orange-600 max-w-full -mt-8">
          <ul className="flex flex-col lg:flex-row lg:ml-40 lg:space-x-8 space-y-4 lg:space-y-0 items-center text-center font-bold text-xl font-subheading text-white">
            <li>
              <Link
                to="/"
                className="block hover:text-black"
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/blinds"
                className="block hover:text-black"
                onClick={closeMenu}
              >
                BLINDS
              </Link>
            </li>
            <li>
              <Link
                to="/curtains"
                className="block hover:text-black"
                onClick={closeMenu}
              >
                CURTAINS
              </Link>
            </li>
            <li>
              <Link
                to="/shutters"
                className="block hover:text-black"
                onClick={closeMenu}
              >
                SHUTTERS
              </Link>
            </li>
            <li>
              <Link
                to="/awnings"
                className="block hover:text-black"
                onClick={closeMenu}
              >
                AWNINGS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-black"
                onClick={closeMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 cursor-pointer lg:ml-32">
            <ul className="flex space-x-4">
              <li>
                <a href="tel:0435 595 003">
                  <MdPermPhoneMsg className="text-white" style={{ fontSize: "30px" }} />
                </a>
              </li>
              <li>
                <a href="tel:0435 595 003">
                  <MdSimCardDownload className="text-white" style={{ fontSize: "30px" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
