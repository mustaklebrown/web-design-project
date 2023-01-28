'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { data } from '../data/data';
import Projects from './Project';

const Portfolio = () => {
  const p = data[0];
  const [project, setProject] = useState('resto');
  const [active, SetActive] = useState('');
  const changeProjects = (sk) => {
    setProject(sk);
    SetActive('primarybtn');
  };

  useEffect(() => {
    changeProjects('resto', 0);
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
        {p[project].map((pro) => {
          return <Projects key={pro.id} pro={pro} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
