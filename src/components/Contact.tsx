const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center reveal">
      <h2 className="text-4xl font-bold text-slate-200">Get In Touch</h2>
      <div className="section-underline"></div>
      <p className="mt-8 max-w-xl mx-auto text-slate-400">
        I'm currently seeking new opportunities and my inbox is always open. Whether you have a question 
        or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="mt-8">
        <a href="mailto:survebhoomika@gmail.com" className="portfolio-btn">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;