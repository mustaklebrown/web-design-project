import React, { Children } from 'react';
import { FaHome, FaUserGraduate } from 'react-icons/fa';
import { ImStatsBars2 } from 'react-icons/im'
import { MdContactMail } from 'react-icons/md'
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
  return (
    <section className=" relative text-gray-100 flex flex-col justify-between bg-gray-900 min-h-screen">
      <Navbar />
      <main>{children}</main>
      <footer className="p-4 w-full border shadow-sm shadow-gray-50">
        <p className="text-center ">footer 2023</p>
      </footer>
      <div className="fixed  flex gap-10 justify-between items-center bottom-10 translate-x-[-50%] left-[50%] bg-gradient p-4 max-w-md mx-auto z-30 rounded-md">
        <a
          href="#nav"
          className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
        >
          <FaHome fontSize={25} />
        </a>
        <a
          href="#about"
          className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
        >
          <FaUserGraduate fontSize={25} />
        </a>
        <a
          href="#portfolio"
          className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
        >
          <ImStatsBars2 fontSize={25} />
        </a>
        <a
          href="#contact"
          className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
        >
          <MdContactMail fontSize={25} />
        </a>
      </div>
    </section>
  );
};

export default Layout;
