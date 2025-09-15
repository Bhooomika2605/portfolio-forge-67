const Projects = () => {
  const projects = [
    {
      title: "Emotion View Interview Analysis",
      tech: "Flask, TensorFlow, OpenCV",
      description: "Engineered a real-time facial emotion analysis system trained on the FER-2013 dataset. It achieves 88% accuracy and includes an automated NLP-based question generator.",
      links: [
        { url: "https://github.com/bhoomisurve/EmotionView", icon: "fab fa-github", label: "GitHub" },
        { url: "https://drive.google.com/file/d/1CZv_nBIkoFc0pdAUG8XhaJqc6N3JlTbs/view", icon: "fas fa-video", label: "Demo Video" }
      ]
    },
    {
      title: "MediConnect Blockchain Platform",
      tech: "Blockchain, Flask, MongoDB",
      description: "The platform offers transparent medicine inventory management, shortage predictions, auto-ordering, and patient-powered reporting — all connected via a secure blockchain backend and real-time dashboards.",
      links: [
        { url: "https://github.com/bhoomisurve/Byteforce", icon: "fab fa-github", label: "GitHub" }
      ]
    },
    {
      title: "MoodNote-AI Mental Health Companion",
      tech: "AI, NLP, Mental Health",
      description: "An AI-powered app for emotional wellbeing tracking, mood analysis, and personalized recommendations for improvement.",
      links: [
        { url: "https://github.com/bhoomisurve/moodnote", icon: "fab fa-github", label: "GitHub" }
      ]
    },
    {
      title: "Real-Time Crop Health Diagnostic Tool",
      tech: "AI, Agriculture, Multilingual Tech",
      description: "An AI tool for farmers with disease detection, risk analysis, fertilizer recommendations, and a multilingual chatbot.",
      links: [
        { url: "https://github.com/bhoomisurve/Farm-assistant-hub", icon: "fab fa-github", label: "GitHub" }
      ]
    },
    {
      title: "AI-powered Fitness & Wellness Platform",
      tech: "AI, Flask, React.js, MongoDB",
      description: "AI-powered personal trainer and wellness coach. It helps users generate personalized workout plans, diet charts, and mental wellbeing routines based on their fitness goals, diet restrictions, and lifestyle.",
      links: [
        { url: "https://github.com/bhoomisurve/Fintness-Planner", icon: "fab fa-github", label: "GitHub" }
      ]
    },
    {
      title: "Space Shooter - Gesture Controlled Game",
      tech: "Pygame, OpenCV, MediaPipe",
      description: "A space shooter game controlled by hand gestures. Wave to move your ship, and make a fist to shoot lasers at alien enemies.",
      links: [
        { url: "https://github.com/bhoomisurve/Gesture-controlled-space-shooter-game", icon: "fab fa-github", label: "GitHub" },
        { url: "https://drive.google.com/file/d/1d07juRSJkvWvh2tEPlAnT1lpNo7ujJ_Q/view", icon: "fas fa-video", label: "Demo Video" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 reveal">
      <h2 className="text-4xl font-bold text-center text-slate-200">Things I've Built</h2>
      <div className="section-underline"></div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-slate-200 mb-2">{project.title}</h3>
            <p className="text-sm text-teal-300 mb-4">{project.tech}</p>
            <p className="text-slate-400 flex-grow mb-4">{project.description}</p>
            <div className="flex space-x-4 text-slate-400 text-2xl">
              {project.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-teal-300 transition-colors"
                  title={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;