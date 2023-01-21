'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { data } from '../data/data';

const Portfolio = () => {
  const p = data[0];
  const [project, setProject] = useState('resto');
  const [active, SetActive] = useState('');
  const changeProjects = (sk) => {
    setProject(sk);
    SetActive('primarybtn');
    console.log(active);
  };

  useEffect(() => {
    changeProjects('resto', 0);
    console.log('hello portfolio');
  }, []);
  return (
    <div
      id="portfolio"
      className="py-10 text-gray-900 max-w-6xl mx-auto px-6 xl:px-0"
    >
      <div className="mb-10 flex flex-col justify-center items-center">
        <h1 className="text-rose-600 text-3xl font-mono uppercase font-bold">
          portfolio
        </h1>
        <div className="w-16 h-2 bg-yellow-500 mt-2 rounded-full  text-centers" />
      </div>
      <div className=" grid  grid-cols-3 gap-4 items-center mb-4 justify-center md:gap-4">
        {p.category.map((category, index) => {
          return (
            <button
              key={index}
              className={` ${category == project && active} btn`}
              onClick={() => changeProjects(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      {/* portfolio content  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
        {p[project].map((project, i) => {
          return (
            <div
              key={i}
              className="cursor-pointer hover:-translate-y-1 duration-300 transition-all  relative bg-white w-full h-[260px] p-4 group rounded-md shadow-md shadow-rose-600 border-none"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                className="group-hover:opacity-50 h-full w-full  duration-300 transition-all"
              />
              <div className="text-gray-900 opacity-0 z-30 w-full h-full left-0 top-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center transition-all absolute  bg-rose-500/30 space-y-2">
                <p className="text-center font-mono text-rose-700 font-bold uppercase">
                  {project.name}
                </p>
                <p className="text-center max-w-xs text-base  font-medium ">
                  {project.desc}
                </p>
                <button className="secondarybtn">explore</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
