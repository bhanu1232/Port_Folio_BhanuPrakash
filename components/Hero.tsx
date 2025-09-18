import React, { useState, useEffect } from 'react';
import hro from "../Assets/hero.avif";
const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-24 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center w-full">
        <div className="space-y-8 text-center md:text-left">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Bhanu Prakash A <span className="font-extrabold text-purple-400">Software  <br /> developer</span>  <span className="font-extrabold text-purple-400"></span>
          </h1>
          <p className={`text-base sm:text-lg text-gray-400 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>He crafts scalable software and web experiences where technology meets creativit</p>
          <a href="#contact" className={`inline-block px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-[#1E1E1E] transition-colors text-lg font-semibold transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Contact me!!
          </a>
        </div>
        <div className={`relative flex justify-center items-center transition-opacity duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
            <img src={hro} alt="Elias, the developer, in a dark hoodie and cap, looking down." className="w-full object-contain z-10" />
            <div className="absolute -bottom-4 -right-2 sm:-bottom-2 sm:-right-2 z-20 flex items-center space-x-2 bg-[#1E1E1E] px-3 py-2 border border-gray-700 text-sm sm:text-base">
              <span className="w-4 h-4 bg-purple-500"></span>
              <span>Currently working on <span className="font-bold text-white">Ai platform</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;