const About = () => {
  return (
    <section id="about" className="py-24 reveal">
      <h2 className="text-4xl font-bold text-center text-slate-200">About Me</h2>
      <div className="section-underline"></div>
      <div className="mt-12 max-w-4xl mx-auto portfolio-card p-8 text-lg text-slate-300 leading-relaxed">
        <p className="mb-4">
          As a final-year Computer Engineering student, I thrive at the intersection of coding, creativity, and problem-solving. 
          My journey in tech is marked by hands-on experience in Python development, web technologies and a robust foundation 
          in data structures and algorithms.
        </p>
        <p className="mb-4">
          I've competed in 8+ hackathons, earning recognition as a national-level winner and multiple-time finalist. 
          These fast-paced competitions have honed my ability to deliver innovative solutions under pressure, lead effective teams, 
          and communicate complex ideas with clarity.
        </p>
        <p>
          Currently, I'm deepening my skills in backend development and scalable system design. I'm passionate about building 
          products that not only work, but truly make an impact.
        </p>
      </div>
    </section>
  );
};

export default About;