
import React, { useRef, useState, useEffect } from 'react';

const Quote: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    const currentRef = sectionRef.current;
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
    <section className="py-32 text-center">
      <div
        ref={sectionRef}
        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <blockquote className="relative max-w-4xl mx-auto p-4">
          <p className="text-4xl tracking-wide font-semibold">Software is a great combination between artistry and engineering.</p>
          <footer className="mt-8 text-right">
            <cite className="px-6 py-2 not-italic text-xl">– Bill Gates</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
