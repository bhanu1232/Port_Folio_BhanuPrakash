import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import Quote from './components/Quote';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  const handleNavigate = (targetPage: string) => {
    setPage(targetPage);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="relative">
      <SocialSidebar />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pl-20 md:pl-28 pr-8 md:pr-16">
          <div className="container mx-auto max-w-6xl">
            {page === 'home' ? (
              <>
                <Hero />
                <Quote />
                <Projects onNavigate={() => handleNavigate('all-projects')} />
                <Skills />
                <About />
                <Contact />
              </>
            ) : (
              <AllProjects onNavigateBack={() => handleNavigate('home')} />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;