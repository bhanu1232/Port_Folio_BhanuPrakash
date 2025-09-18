
import React from 'react';
import { DiscordIcon, MailIcon, GithubIcon, FigmaIcon, LinkedinIcon } from './Icons';

const SocialSidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-16 md:w-20 flex flex-col items-center justify-center space-y-8 z-50 border-r border-gray-700/50">
      <a href="#" aria-label="Discord" className="text-gray-400 hover:text-purple-400 transition-colors">
        <DiscordIcon className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Email" className="text-gray-400 hover:text-purple-400 transition-colors">
        <MailIcon className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Github" className="text-gray-400 hover:text-purple-400 transition-colors">
        <GithubIcon className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Figma" className="text-gray-400 hover:text-purple-400 transition-colors">
        <FigmaIcon className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Linkedin" className="text-gray-400 hover:text-purple-400 transition-colors">
        <LinkedinIcon className="h-6 w-6" />
      </a>
    </aside>
  );
};

export default SocialSidebar;
