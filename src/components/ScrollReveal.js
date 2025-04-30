import React, { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ children, animationClass = 'animate-fade-up', threshold = 0.1, delay = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(elementRef.current); // Stop observing once visible
          }, delay);
        }
      },
      {
        threshold: threshold,
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={elementRef} className={isVisible ? animationClass : 'opacity-0'}>
      {children}
    </div>
  );
};

export default ScrollReveal;