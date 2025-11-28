// src/components/ScrollReveal.jsx
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-animate]");

    if (!("IntersectionObserver" in window) || items.length === 0) {
      // Fallback: show everything
      items.forEach((el) => el.classList.add("sr-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
      }
    );

    items.forEach((el) => {
      el.classList.add("sr-init");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
