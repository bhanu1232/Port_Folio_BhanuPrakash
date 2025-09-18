import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';

interface SkillCategoryProps {
    title: string;
    skills: string[];
    delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => {
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
            className={`border border-gray-700 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <h3 className="text-2xl font-bold p-3 border-b border-gray-700">{title}</h3>
            <ul className="p-3 space-y-2">
                {skills.map(skill => <li key={skill} className="text-gray-400 text-base">{skill}</li>)}
            </ul>
        </div>
    );
};

const Skills: React.FC = () => {
    const skillsData = {
        Languages: ['TypeScript', 'JavaScript', 'C/C++', 'Python'],
        Databases: ['PostgreSQL', 'SQLite', 'Mongo'],
        Tools: ['VSCode', 'Figma', 'Git', 'Cursor', 'Claude'],
        CORE: ['Data Structers', 'OOD', 'System Design'],
        Frameworks: ['React', 'Node', 'Express', 'RestAPi', 'Flask']
    };

    return (
        <SectionWrapper title="skills" id="skills">
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SkillCategory title="Languages" skills={skillsData.Languages} delay={0} />
                    <SkillCategory title="Databases" skills={skillsData.Databases} delay={150} />
                    <SkillCategory title="Tools" skills={skillsData.Tools} delay={300} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SkillCategory title="CORE" skills={skillsData.CORE} delay={450} />
                    <SkillCategory title="Frameworks" skills={skillsData.Frameworks} delay={600} />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;