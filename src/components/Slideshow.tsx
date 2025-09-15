import { useEffect, useState } from 'react';

interface SlideshowProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
}

const Slideshow = ({ images, className = '' }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className={`slideshow-container ${className}`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`${index === currentSlide ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;