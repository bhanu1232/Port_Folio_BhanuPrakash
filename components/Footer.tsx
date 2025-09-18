
import React from 'react';
import { MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-700 mt-20">
      <div className="container mx-auto max-w-6xl py-10 text-center text-gray-400 space-y-4 pl-20 md:pl-24 pr-8 md:pr-12">
        <h3 className="text-3xl font-bold tracking-widest text-white">IPSUM</h3>
        <p className="text-base">Web designer and front-end developer</p>
        <a href="mailto:hello@example.com" className="flex justify-center items-center space-x-2 text-base hover:text-purple-400 transition-colors">
          <MailIcon className="h-6 w-6" />
          <span>hello@example.com</span>
        </a>
        <div className="pt-8 text-sm">
            © 2024 Your Company, Inc. <a href="#" className="underline">credits</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
