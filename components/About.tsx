
import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import abot from "../Assets/about.avif";
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
          <p>Hello, I'm Bhanu Prakash!</p>
          <p>
            I'm a self-taught Software Developer based in Tirupati, India. I specialize in building scalable software and responsive web applications from scratch, turning them into modern, user-friendly experiences.
          </p>
          <p>
            Transforming my creativity and technical expertise into impactful software has been my passion for several years. I've developed full-stack modules and AI-powered solutions, helped organizations and events establish their online presence, and continuously strive to learn the newest technologies, frameworks, and best practices.
          </p>
          <a href="#contact">
            <button className="mt-4 px-5 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-[#1E1E1E] transition-colors text-base">
              Contact Me!
            </button>
          </a>
        </div>
        <div className={`relative flex justify-center items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img src={abot} alt="A close-up of Elias, the developer, gesturing with his hand." className="w-full max-w-sm object-contain z-10" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
