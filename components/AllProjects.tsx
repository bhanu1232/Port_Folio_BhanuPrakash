import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import p1 from "../Assets/p1.png";
import p2 from "../Assets/p2.png";
import p3 from "../Assets/p3.png";
import p5 from "../Assets/p5.png";
import p4 from "../Assets/p4.png";
import p6 from "../Assets/p6.png";

interface AllProjectsProps {
  onNavigateBack: () => void;
}

const allProjectData: Omit<ProjectCardProps, 'delay'>[] = [
  {
    imgSrc: p1,
    title: 'DSA Practice AI',
    tech: ['Next.js -', 'Gemini -', 'firebase'],
    description: 'Ai powered dsa practice platform',
    link: 'https://learn-with-ai-fvte.vercel.app/'
  },
  {
    imgSrc: p2,
    title: 'School Website',
    tech: ['React -', 'TypeScript -', 'Tailwind'],
    description: 'Freelanced A website for a school',
    link: 'http://jcrseduvalleyschool.com/'
  },
  {
    imgSrc: p3,
    title: 'TechFest Portal',
    tech: ['React -', 'Firebase -', 'Razorpay'],
    description: 'National lever tech fest portal.',
    link: 'https://cunosure2k25-zxl9.vercel.app/'
  },
  {
    imgSrc: p5,
    title: 'Gym Website',
    tech: ['React -', 'Firebase -', 'Razorpay'],
    description: 'Freelanced Gym Website.',
    link: 'http://kalyanbattersetty.com/'
  },
  {
    imgSrc: p4,
    title: 'Rubics Cube Solver',
    tech: ['Python -', 'Tkinter -', 'ALG.CUBING.NET'],
    description: 'Rubiks cube solver using python .',
    link: 'https://github.com/bhanu1232/Rubiks_solver'
  },
  {
    imgSrc: p6,
    title: 'Ecommerce Website',
    tech: ['Next.Js -', 'Firebase -', 'Razorpay'],
    description: 'Fully functinal Ecommerce website.',
    link: 'https://shop-smart-and-chic.vercel.app/'
  },
];


const AllProjects: React.FC<AllProjectsProps> = ({ onNavigateBack }) => {
  return (
    <div className="py-24 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
        <div className="flex items-center">

          <div className="w-full ml-6 h-px bg-purple-400 max-w-md hidden sm:block"></div>
        </div>
        <button onClick={onNavigateBack} className="border border-gray-600 px-4 py-2 text-base hover:bg-gray-700 transition-colors">
          ← Back to Home
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjectData.map((project, index) => (
          <ProjectCard key={index} {...project} delay={(index % 3) * 150} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
