import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-[500px] h-[500px] relative">
      <div className="bg-black/60 absolute top-0 left-0 w-full h-full z-20">
        <div className="text-4xl md:text-7xl font-bold text-center flex w-full z-30 h-full tracking-widest justify-center items-center">
          <h1 className="text-yellow-400 z-50 ">
            WE CREATE <br /> <span className=" text-gray-100">MORE THAN</span>{' '}
            <br /> <span className="text-red-600 ">JUST İNTERİOR</span>
          </h1>
        </div>
      </div>
      <img
        src="/bg-2.jpg"
        alt=""
        className=" w-full h-[500px] object-cover object-center"
      />
    </div>
  );
};

export default Hero;
