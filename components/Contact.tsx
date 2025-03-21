"use client";

import { useRef, useEffect, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`py-32 px-6 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-lg mx-auto text-center">
        <h2 className="flex flex-col items-center text-2xl md:text-3xl font-bold text-slate-200 mb-5">
          <span className="text-primary font-mono mb-2 text-base">04. What's Next?</span>
          <span>Get In Touch</span>
        </h2>

        <p className="text-slate-400 mb-12">
          I have a thing for enabling environments where innovation meets genius minds.
          Whether for a potential project or just to say hi, I usually answer within a few hours!
        </p>

        <a
          href="mailto:addawebadua@gmail.com"
          className="inline-block px-7 py-4 border border-primary text-primary rounded font-medium text-lg hover:bg-primary/10 transition-colors duration-200"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
