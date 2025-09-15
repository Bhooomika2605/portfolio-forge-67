import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      reset: false
    });

    sr.reveal('.reveal');

    return () => {
      sr.destroy();
    };
  }, []);
};

export default useScrollReveal;