import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-slate-900/50 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-teal-300">
          Bhoomika Surve
        </a>

        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 w-full md:w-auto text-center md:text-left`}>
          <a href="#about" className="nav-link text-gray-300 hover:text-white block py-2" onClick={closeMenu}>About</a>
          <a href="#skills" className="nav-link text-gray-300 hover:text-white block py-2" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="nav-link text-gray-300 hover:text-white block py-2" onClick={closeMenu}>Projects</a>
          <a href="#hackathons" className="nav-link text-gray-300 hover:text-white block py-2" onClick={closeMenu}>Hackathons</a>
          <a href="#certificates" className="nav-link text-gray-300 hover:text-white block py-2" onClick={closeMenu}>Certifications</a>
          <a href="#contact" className="nav-link text-gray-300 hover:text-white block py-2" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;