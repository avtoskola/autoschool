'use client';

import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}
export default function FadeInSection(props: Props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setVisible(true), 100);
        observer.unobserve(domRef.current as Element);
      }
    });

    observer.observe(domRef.current as Element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        animationPlayState: isVisible ? 'running' : 'paused',
        opacity: isVisible ? 1 : 0,
      }}
      className={`animate-fadeIn ${props.className}`}
    >
      {props.children}
    </div>
  );
}
