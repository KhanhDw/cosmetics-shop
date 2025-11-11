import React, { useEffect, useState } from 'react';
import useOnScreen from '@/hooks/useOnScreen';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  rootMargin?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animationClass = 'animate-fade-in-up',
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const [ref, isVisible] = useOnScreen({
    threshold,
    rootMargin,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isMounted && isVisible ? animationClass : 'opacity-0'
      } transition-opacity duration-500`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;