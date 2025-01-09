import { useEffect, useState, RefObject } from 'react';

export const useLazyLoad = (ref: RefObject<HTMLElement | null>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      console.warn('[useLazyLoad] Reference is not attached to a DOM element.');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { isInView };
};
