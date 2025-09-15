import Slideshow from './Slideshow';

const Hackathons = () => {
  const hackathons = [
    {
      title: "🌾 Agri-Tech Hackathon 2025",
      position: "Top 10",
      description: "A 24-hour national-level sprint hosted by K. J. Somaiya College of Engineering (KJSCE), Mumbai.",
      link: "https://www.linkedin.com/posts/bhoomika-surve_hackathonexperience-agritech-farmersempowerment-activity-7338859584956043265-h_a5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElK-SsB2bsGWpMQhpSnmDV6c-XK8IVLpKA",
      images: [
        { src: "/agri.jpeg", alt: "Agri-Tech Hackathon Image 1" },
        { src: "/tech.jpeg", alt: "Agri-Tech Hackathon Image 2" }
      ]
    },
    {
      title: "AIMSR Hackathon 2025",
      position: "First Runner-Up",
      description: "My team secured the First Runner-Up position at the prestigious Aditya Institute of Management Studies & Research (AIMSR) Hackathon 2025!",
      link: "https://www.linkedin.com/posts/bhoomika-surve_ai-hackathon-healthtech-activity-7308734620399800320-sQBZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElK-SsB2bsGWpMQhpSnmDV6c-XK8IVLpKA",
      images: [
        { src: "/AIMSR.jpeg", alt: "AIMSR Hackathon 2025" },
        { src: "/aims.gif", alt: "AIMSR Hackathon 2025 Image 2" }
      ]
    },
    {
      title: "NSC-ETT 2024",
      position: "3rd Position",
      description: "Secured 3rd position in the Paper Presentation at the National Student Conference hosted by Thakur College.",
      link: "https://www.linkedin.com/posts/bhoomika-surve_paperpresentation-nscett-emergingtrends-activity-7299535558827995136-d9ze?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElK-SsB2bsGWpMQhpSnmDV6c-XK8IVLpKA",
      images: [
        { src: "/nsc-ett.jpeg", alt: "NSC-ETT Paper Presentation" },
        { src: "/nsc.jpeg", alt: "NSC-ETT Paper Presentation Image 2" }
      ]
    },
    {
      title: "SBI Hack-AI-Thon 2025",
      position: "Top 12 Mumbai Region",
      description: "Selected among the Top 12 from Mumbai out of hundreds at the SBI Hack-AI-Thon Regional Demo Day.",
      link: "https://www.linkedin.com/posts/bhoomika-surve_hackathonjourney-aiml-fintechinnovation-activity-7343140865520930817-XLOR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElK-SsB2bsGWpMQhpSnmDV6c-XK8IVLpKA",
      images: [
        { src: "/sbi-hackathon.jpeg", alt: "SBI Hack-AI-Thon 2025" },
        { src: "/sbi.jpeg", alt: "SBI Hack-AI-Thon 2025 Image 2" }
      ]
    },
    {
      title: "KLEOS 3.0 Hackathon",
      position: "Top 30",
      description: "From 400+ teams to the final top 30 at this national hackathon hosted by Ramrao Adik Institute of Technology.",
      link: "https://www.linkedin.com/posts/bhoomika-surve_kleos3-hackathonjourney-teambyteforce-activity-7355648137836773377-Vh_L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElK-SsB2bsGWpMQhpSnmDV6c-XK8IVLpKA",
      images: [
        { src: "/Kleos.jpeg", alt: "KLEOS 3.0 National Level Hackathon" },
        { src: "/kleos2.jpeg", alt: "KLEOS 3.0 National Level Hackathon Image 2" }
      ]
    },
    {
      title: "Hackanova 4.0",
      position: "Top 50 Teams",
      description: "Made it to the Top 50 in the final round among 350+ teams at TSDW TCET's Hackanova 4.0.",
      link: "https://www.linkedin.com/posts/bhoomika-surve_hackanova-hackathon-tsdwtcet-activity-7299539897718071298-Rd4Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAElK-SsB2bsGWpMQhpSnmDV6c-XK8IVLpKA",
      images: [
        { src: "/hack.jpg", alt: "Hackanova 4.0 Image 1" },
        { src: "/nova.jpg", alt: "Hackanova 4.0 Image 2" }
      ]
    }
  ];

  return (
    <section id="hackathons" className="py-24 reveal">
      <h2 className="text-4xl font-bold text-center text-slate-200">Hackathon Highlights</h2>
      <div className="section-underline"></div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="portfolio-card p-6 flex flex-col items-center">
            <div className="w-full h-64 rounded-lg mb-4 overflow-hidden shadow-md">
              <Slideshow images={hackathon.images} />
            </div>
            <h3 className="text-xl font-semibold text-slate-200 text-center">{hackathon.title}</h3>
            <p className="text-teal-300 text-sm mt-1 mb-2">{hackathon.position}</p>
            <p className="text-slate-400 text-center text-sm">{hackathon.description}</p>
            <div className="mt-4">
              <a 
                href={hackathon.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-teal-300 hover:text-teal-100 transition-colors text-sm"
              >
                View Post <i className="fab fa-linkedin ml-1"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;