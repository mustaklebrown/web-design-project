import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-10 max-w-6xl mx-auto px-6 xl:px-0">
      <div className="mb-10 flex flex-col justify-center items-center">
        <h1 className="text-rose-600 text-3xl font-mono uppercase font-bold">
          about us
        </h1>
        <div className="w-16 h-2 bg-yellow-500 mt-2 rounded-full  text-centers" />
      </div>
      {/* about content  */}
      <div className="md:flex h-full justify-between items-start md:space-y-0 space-y-6">
        <div className="md:w-[45%] h-full">
          <img
            src="./bg-1.jpg"
            alt="abou-image"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="md:w-[45%] flex flex-col items-center md:items-start space-y-4 text-center md:text-start">
          <h1 className="text-xl md:text-start font-bold text-yellow-500">
            WE ARE YOUR FUTURE
          </h1>
          <p className="text-base leading-6 max-w-md  text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            esse! Porro, aspernatur aut? Earum, magni?
          </p>
          <p className="text-base leading-6 max-w-md  text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero
            omnis qui dolorem, optio a fuga saepe tenetur totam? Ex!
          </p>
          <a href="#contact" className="primarybtn">
            contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
