
import React from 'react';
import { MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-700 mt-20">
      <div className="container mx-auto max-w-6xl py-10 text-center text-gray-400 space-y-4 pl-20 md:pl-24 pr-8 md:pr-12">
        <h3 className="text-3xl font-bold tracking-widest text-white">BHANU PRAKASH</h3>
        <p className="text-base">Software Developer & Full stack engineer</p>
        <a href="mailto:cbhanuprakash1212@gmail.com" className="flex justify-center items-center space-x-2 text-base hover:text-purple-400 transition-colors">
          <MailIcon className="h-6 w-6" />
          <span>cbhanuprakash1212@gmail.com</span>
        </a>

      </div>
    </footer>
  );
};

export default Footer;
