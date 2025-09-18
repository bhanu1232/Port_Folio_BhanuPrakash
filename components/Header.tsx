import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for handling scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      // Logic for background change on scroll
      setIsScrolled(window.scrollY > 10);

      // Logic for active link highlighting
      const sections = ['home', 'projects', 'skills', 'about-me', 'contact'];
      let currentSection = '';

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          // An offset of 150px to account for header height and give some buffer
          if (sectionTop <= 150) {
            currentSection = sectionId;
          }
        }
      }

      if (currentSection) {
        setActiveLink(currentSection);
      } else {
        setActiveLink('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', title: 'home' },
    { id: 'projects', title: 'projects' },
    { id: 'skills', title: 'skills' },
    { id: 'about-me', title: 'about-me' },
    { id: 'contact', title: 'contact' },
  ];

  const NavLink = ({ id, title }: { id: string; title: string }) => (
    <a
      href={`#${id}`}
      onClick={() => setIsMenuOpen(false)}
      className={`capitalize transition-colors duration-300 ${activeLink === id ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
    >
      <span className="text-purple-400">#</span>{title.replace('-', ' ')}
    </a>
  );

  return (
    <>
      <header className={`fixed top-0 left-16 md:left-20 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#1E1E1E]/80 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="mx-auto flex justify-between items-center p-6 max-w-6xl">
          <a href="#home" className="text-3xl font-bold tracking-widest text-white hover:text-purple-400 transition-colors duration-300">IPSUM</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-lg">
            {navLinks.map(link => <NavLink key={link.id} {...link} />)}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="relative z-50">
              {isMenuOpen ? <CloseIcon className="h-8 w-8 text-white" /> : <MenuIcon className="h-8 w-8 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-30 bg-[#1E1E1E] transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-10 text-3xl">
          {navLinks.map(link => <NavLink key={link.id} {...link} />)}
        </nav>
      </div>
    </>
  );
};

export default Header;
