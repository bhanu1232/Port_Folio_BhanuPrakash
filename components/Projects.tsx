import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  onNavigate: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const projectData = [
    {
      imgSrc: 'https://i.imgur.com/8L4n30f.png',
      title: 'Project X',
      tech: ['Webstudio', 'Ghost', 'Baserow'],
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      imgSrc: 'https://i.imgur.com/8L4n30f.png',
      title: 'Project Y',
      tech: ['React', 'TypeScript', 'Tailwind'],
      description: 'A personal portfolio website.'
    },
    {
      imgSrc: 'https://i.imgur.com/8L4n30f.png',
      title: 'Project Z',
      tech: ['Vue', 'Firebase', 'SCSS'],
      description: 'A real-time chat application.'
    }
  ];

  return (
    <SectionWrapper 
        title="projects" 
        id="projects" 
        actionButton={
            <button onClick={onNavigate} className="border border-gray-600 px-4 py-2 text-base hover:bg-gray-700 transition-colors">
                View all →
            </button>
        }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 150} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;