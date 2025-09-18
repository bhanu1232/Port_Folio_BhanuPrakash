
import React from 'react';

interface SectionWrapperProps {
  title: string;
  id: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, id, children, actionButton }) => {
  return (
    <section id={id} className="py-24">
      <div className="flex items-center mb-12">
        <h2 className="text-4xl font-bold text-white whitespace-nowrap">
          <span className="text-purple-400">#</span>{title}
        </h2>
        <div className="w-full ml-6 h-px bg-purple-400 max-w-md"></div>
        {actionButton && <div className="ml-auto whitespace-nowrap">{actionButton}</div>}
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
