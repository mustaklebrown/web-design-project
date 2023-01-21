import React from 'react';
import Link from 'next/link';
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Navbar = () => {
  return (
    <div
      id="nav"
      className=" text-gray-100 flex  px-5 py-4 bg-gray-900 items-center justify-between w-full"
    >
      <div className="flex items-center space-x-10">
        <div>
          <h1 className="text-2xl font-bold">
            INTERİOR<span className="text-yellow-400">LAB</span>
          </h1>
        </div>
        <ul className="hidden md:flex items-center space-x-5">
          <Link
            href="#hero"
            className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
          >
            About us
          </Link>
          <Link
            href="#portfolio"
            className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="text-gray-100 uppercase font-semibold hover:text-yellow-500 transition-all duration-200 "
          >
            Contact
          </Link>
        </ul>
      </div>

      <div className="flex text-end space-x-2">
        <button className="  rounded-full hover:text-yellow-500 duration-200 transition-all">
          <FaFacebook size={30} />
        </button>
        <button className="  rounded-full hover:text-yellow-500 duration-200 transition-all">
          <FaYoutube size={30} />
        </button>
        <button className="   rounded-full hover:text-yellow-500 duration-200 transition-all">
          <IoLogoWhatsapp size={30} />
        </button>
        <button className="   rounded-full hover:text-yellow-500 duration-200 transition-all">
          <FaGithub size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
