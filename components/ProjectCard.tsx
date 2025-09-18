import React, { useRef, useState, useEffect } from 'react';

export interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tech: string[];
  description: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc, title, tech, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
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

    const currentRef = cardRef.current;
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
    <div
      ref={cardRef}
      className={`transition-all duration-700 hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={imgSrc} alt={title} className="w-full h-auto object-cover border border-gray-700 group-hover:border-purple-400 transition-colors" />
      <div className="py-3 text-base text-gray-400">
          {tech.join(' ')}
      </div>
      <div className="p-4 border border-gray-700 space-y-4 group-hover:border-purple-400 transition-colors">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-gray-400 text-base">{description}</p>
          <a href="#" className="inline-block px-5 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-[#1E1E1E] transition-colors text-base">
              View Project
          </a>
      </div>
    </div>
  );
};

export default ProjectCard;
