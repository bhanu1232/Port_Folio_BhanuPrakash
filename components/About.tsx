
import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <SectionWrapper title="about-me" id="about-me">
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className={`space-y-5 text-gray-400 text-lg leading-loose transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p>Hello, I'm Elias!</p>
          <p>I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
          <p>Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
          <button className="mt-4 px-5 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-[#1E1E1E] transition-colors text-base">
            Read More
          </button>
        </div>
        <div className={`relative flex justify-center items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img src="https://i.imgur.com/gK6nELg.png" alt="A close-up of Elias, the developer, gesturing with his hand." className="w-full max-w-sm object-contain z-10"/>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
