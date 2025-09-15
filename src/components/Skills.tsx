const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      title: "AI/ML Technologies",
      skills: ["TensorFlow", "Keras", "OpenCV", "NLP", "Computer Vision"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flask", "Django", "Google Generative AI", "Pygame", "TailwindCSS", "NumPy, Pandas"]
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "Firebase", "MySQL", "Git/GitHub", "REST APIs", "Docker"]
    },
    {
      title: "Cloud & Platforms",
      skills: ["Google Cloud Platform", "Firebase", "Blockchain"]
    }
  ];

  return (
    <section id="skills" className="py-24 reveal">
      <h2 className="text-4xl font-bold text-center text-slate-200">My Arsenal</h2>
      <div className="section-underline"></div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="portfolio-card p-6">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;