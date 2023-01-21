import React, { useState } from 'react';
import { FaGithub, FaFacebook, FaYoutube, FaBars } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drap, setDrap] = useState(true);
  const opennav = () => {
    setOpen(!open);
  };
  return (
    <div className="relative w-full ">
      <div
        id="nav"
        className=" text-gray-100 flex  px-5 py-4 bg-gray-900 items-center justify-between w-full"
      >
        <div className="flex items-center space-x-10">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              INTERİOR<span className="text-yellow-400">LAB</span>
            </h1>
          </div>
          <ul className="hidden md:flex items-center space-x-5">
            <a
              href="#hero"
              className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
            >
              About us
            </a>
            <a
              href="#portfolio"
              className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
            >
              Contact
            </a>
          </ul>
        </div>

        <div className="flex text-end space-x-2">
          <button className="  rounded-full hover:text-yellow-500 duration-200 transition-all">
            <FaFacebook size={30} className="text-lg md:text-xl" />
          </button>
          <button className="  rounded-full hover:text-yellow-500 duration-200 transition-all">
            <FaYoutube size={30} className="text-lg md:text-xl" />
          </button>
          <button className="   rounded-full hover:text-yellow-500 duration-200 transition-all">
            <IoLogoWhatsapp size={30} className="text-lg md:text-xl" />
          </button>
        </div>
        <button
          onClick={opennav}
          className="md:hidden block   rounded-full hover:text-yellow-500 duration-200 transition-all"
        >
          <FaBars size={25} className="md:text-xl" />
        </button>
      </div>
      <div
        className={`${!open ? 'hidden duration-500' : '-my-0 duration-500 '} `}
      >
        <ul className="md:hidden border-b flex-col flex space-y-4 w-full text-center py-8 duration-300 ease-in-out transition-all ">
          <a
            href="#nav"
            onClick={() => opennav()}
            className="text-gray-100 text-lg py-2 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
          >
            home
          </a>
          <a
            href="#about"
            onClick={() => opennav()}
            className="text-gray-100 text-lg py-2 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
          >
            about
          </a>

          <>
            <a
              href="#portfolio"
              onClick={() => opennav()}
              className="text-gray-100 text-lg py-2 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
            >
              portfolio
            </a>
            <a
              href="#contact"
              onClick={() => opennav()}
              className="text-gray-100 text-lg py-2 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
            >
              contact
            </a>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
