import React, { Children } from 'react';
import { FaHome, FaUserGraduate } from 'react-icons/fa';
import { ImStatsBars2 } from 'react-icons/im'
import { MdContactMail } from 'react-icons/md'
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
  return (
    <section className=" relative text-gray-100 flex flex-col justify-between bg-gray-900 min-h-screen">
      <main>{children}</main>
      <footer className="p-4 w-full border shadow-sm shadow-gray-50">
        <p className="text-center ">footer 2023</p>
      </footer>

    </section>
  );
};

export default Layout;
