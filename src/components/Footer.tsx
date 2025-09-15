const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/bhoomisurve", icon: "fab fa-github", label: "GitHub" },
    { href: "https://linkedin.com/in/bhoomika-surve", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://medium.com/@survebhoomika", icon: "fab fa-medium", label: "Medium" },
    { href: "https://leetcode.com/Bhoomika_Surve/", icon: "fas fa-code", label: "LeetCode" },
    { href: "https://www.instagram.com/bhoomikaaahh/", icon: "fab fa-instagram", label: "Instagram" }
  ];

  return (
    <footer className="text-center text-slate-500 py-6">
      <div className="flex justify-center space-x-6 text-2xl mb-4">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-teal-300 transition-colors"
            title={link.label}
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <p>&copy; 2025 Bhoomika Surve</p>
    </footer>
  );
};

export default Footer;