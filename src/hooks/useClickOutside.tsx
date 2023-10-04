import React, { useRef, useEffect } from 'react';

export const useClickOutside = (handler: Function) => {
  const ref: React.MutableRefObject<any> = useRef(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return { ref };
};
