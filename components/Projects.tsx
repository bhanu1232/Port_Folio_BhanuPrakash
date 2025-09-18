import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import p1 from "../Assets/p1.png";
import p2 from "../Assets/p2.png";
import p3 from "../Assets/p3.png";
interface ProjectsProps {
  onNavigate: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const projectData = [
    {
      imgSrc: p1,
      title: 'DSA Practice AI',
      tech: ['Next.js -', 'Gemini -', 'firebase'],
      description: 'Ai powered dsa practice platform'
    },
    {
      imgSrc: p2,
      title: 'School Website',
      tech: ['React -', 'TypeScript -', 'Tailwind'],
      description: 'Freelanced A website for a school'
    },
    {
      imgSrc: p3,
      title: 'TechFest Portal',
      tech: ['React -', 'Firebase -', 'Razorpay'],
      description: 'National lever tech fest portal.'
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