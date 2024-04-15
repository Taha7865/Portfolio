import React, { useRef, useState, useEffect } from 'react';
import './App.css'; // Ensure you import your Tailwind CSS here

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
