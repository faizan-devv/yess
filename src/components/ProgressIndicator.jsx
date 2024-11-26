// components/ScrollManager.jsx
"use client";
import { useEffect } from "react";

const ScrollManager = () => {
  useEffect(() => {
    //let lastScrollTop = 0;
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;

      const currentScroll = window.pageYOffset;
      //const direction = currentScroll > lastScrollTop ? 'down' : 'up';
      const sections = document.querySelectorAll(
        ".fullpage-section, .normal-scroll-sections"
      );

      // Find the currently visible section
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isFullPage = section.classList.contains("fullpage-section");

        // If section is in view
        if (
          rect.top >= -window.innerHeight / 2 &&
          rect.top <= window.innerHeight / 2
        ) {
          if (isFullPage) {
            isScrolling = true;
            section.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
              isScrolling = false;
            }, 1000);
          }
        }
      });

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollManager;
