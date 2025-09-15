const Certifications = () => {
  const certifications = [
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/726ccda57cba"
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank", 
      link: "https://www.hackerrank.com/certificates/5a5777f4bb8d"
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/682437731529"
    },
    {
      title: "Goldman Sachs - Software Engineering",
      issuer: "Forage",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_YPqHNa83eJWfE4fu3_1718805364504_completion_certificate.pdf"
    },
    {
      title: "Hacksagon 2025 Participant",
      issuer: "Unstop",
      link: "https://unstop.com/certificate-preview/5bc3d79f-7631-4683-be99-b25ac8169345"
    },
    {
      title: "Quasar 3.0 Participant",
      issuer: "Unstop",
      link: "https://unstop.com/certificate-preview/73022f27-b214-4e6b-b315-ccc1c02a10f3"
    }
  ];

  return (
    <section id="certificates" className="py-24 reveal">
      <h2 className="text-4xl font-bold text-center text-slate-200">Licenses & Certifications</h2>
      <div className="section-underline"></div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="portfolio-card p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-2">{cert.title}</h3>
            <p className="text-sm text-teal-300 mb-4">{cert.issuer}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-slate-300 hover:text-teal-300 transition-colors"
            >
              Show Credential <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;