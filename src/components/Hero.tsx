import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Bhoomika Surve.', 'A Developer.', 'A Problem Solver.', 'An Innovator.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        cursorChar: '|',
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-16">
      <div className="md:w-1/2 md:pr-10">
        <p className="text-lg text-teal-300 mb-2">Hello, I am</p>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-slate-200 mb-4">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl">
          Final-Year Computer Engineering Student passionate about building scalable and impactful software solutions.
        </p>
        
        {/* Social Badges */}
        <div className="mt-8 flex justify-center md:justify-start items-center flex-wrap gap-4">
          <a href="https://github.com/bhoomisurve" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="https://img.shields.io/badge/GitHub-bhoomisurve-0d1117?style=for-the-badge&logo=github&logoColor=white&labelColor=2dd4bf" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/bhoomika-surve" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="https://img.shields.io/badge/LinkedIn-bhoomika--surve-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
          </a>
          <a href="https://medium.com/@survebhoomika" target="_blank" rel="noopener noreferrer" title="Medium">
            <img src="https://img.shields.io/badge/Medium-@survebhoomika-black?style=for-the-badge&logo=medium" alt="Medium" />
          </a>
          <a href="https://leetcode.com/Bhoomika_Surve/" target="_blank" rel="noopener noreferrer" title="LeetCode">
            <img src="https://img.shields.io/badge/LeetCode-Bhoomika__Surve-FFA116?style=for-the-badge&logo=leetcode" alt="LeetCode" />
          </a>
          <a href="https://www.instagram.com/bhoomikaaahh/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="https://img.shields.io/badge/Instagram-bhoomikaaahh-E4405F?style=for-the-badge&logo=instagram" alt="Instagram" />
          </a>
        </div>
        
        <div className="mt-8">
          <a href="/Bhoomika_Surve.pdf" target="_blank" className="portfolio-btn">
            View My Resume
          </a>
        </div>
      </div>
      
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-teal-400 transform hover:scale-105 transition-transform duration-300">
          <img src="/image.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;