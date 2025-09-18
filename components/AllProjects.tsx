import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

interface AllProjectsProps {
  onNavigateBack: () => void;
}

const allProjectData: Omit<ProjectCardProps, 'delay'>[] = [
  { imgSrc: 'https://i.imgur.com/8L4n30f.png', title: 'Project X', tech: ['Webstudio', 'Ghost', 'Baserow'], description: 'Lorem ipsum dolor sit amet' },
  { imgSrc: 'https://i.imgur.com/8L4n30f.png', title: 'Project Y', tech: ['React', 'TypeScript', 'Tailwind'], description: 'A personal portfolio website.' },
  { imgSrc: 'https://i.imgur.com/8L4n30f.png', title: 'Project Z', tech: ['Vue', 'Firebase', 'SCSS'], description: 'A real-time chat application.' },
  { imgSrc: 'https://i.imgur.com/8L4n30f.png', title: 'Project A', tech: ['Next.js', 'GraphQL', 'Prisma'], description: 'An e-commerce platform.' },
  { imgSrc: 'https://i.imgur.com/8L4n30f.png', title: 'Project B', tech: ['SvelteKit', 'Supabase'], description: 'A social media dashboard.' },
  { imgSrc: 'https://i.imgur.com/8L4n30f.png', title: 'Project C', tech: ['Angular', 'NgRx', 'Node.js'], description: 'A complex enterprise application.' },
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
