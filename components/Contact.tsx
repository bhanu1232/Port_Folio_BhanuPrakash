
import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { DiscordIcon, MailIcon, GithubIcon, LeetCodeIcon, LinkedinIcon } from './Icons';

const Contact: React.FC = () => {
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
    <SectionWrapper title="contact" id="contact">
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 text-lg max-w-md">
            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.
          </p>
          <form className="space-y-6" action="mailto:cbhanuprakash1212@gmai.com">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" id="name" placeholder="Name" className="w-full bg-transparent border border-gray-600 p-3 focus:border-purple-400 focus:outline-none text-base" />
              </div>
              <div>
                <input type="email" id="email" placeholder="Email" className="w-full bg-transparent border border-gray-600 p-3 focus:border-purple-400 focus:outline-none text-base" />
              </div>
            </div> */}
            {/* <div>
              <textarea id="message" rows={3} placeholder="Message" className="w-full bg-transparent border border-gray-600 p-3 focus:border-purple-400 focus:outline-none text-base"></textarea>
            </div> */}
            <button className="px-5 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-[#1E1E1E] transition-colors text-base">
              Contact
            </button>
          </form>
        </div>
        <div className={`flex justify-start lg:justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border border-gray-600 p-6 space-y-5 h-fit">
            <h3 className="text-2xl font-bold mb-4">My Whereabouts</h3>

            <a href="mailto:cbhanuprakash1212@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors text-base">
              <MailIcon className="h-6 w-6" />
              <span>cbhanuprakash1212@gmail.com</span>
            </a>
            <a href="https://www.github.com/bhanu1232" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors text-base">
              <GithubIcon className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a href="https://leetcode.com/u/cbhanuprakash1212/" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors text-base">
              <LeetCodeIcon className="h-6 w-6" />
              <span>LeetCode</span>
            </a>
            <a href="https://www.linkedin.com/in/bhanuprakashchowdam" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors text-base">
              <LinkedinIcon className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper >
  );
};

export default Contact;
