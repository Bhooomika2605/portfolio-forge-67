import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Hackathons from '../components/Hackathons';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AuroraBackground from '../components/AuroraBackground';
import useScrollReveal from '../hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <AuroraBackground />
      <Navigation />
      
      <main className="container mx-auto px-6 md:px-8 mt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
