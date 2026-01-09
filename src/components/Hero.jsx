import { useEffect, useState, useRef } from "react";

const images = [
  "/src/assets/cctv.png",
  "/src/assets/hero1.jpg",
  "/src/assets/image3.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Slide-up animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`hero-bg ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div
        ref={contentRef}
        className={`hero-content container ${visible ? "slide-up" : ""}`}
      >
        <h1>
          Professional <span className="accent">Security</span>
          <br />
          You Can Trust
        </h1>

        <p>
          Veecious Security Solutions (PTY) Ltd provides reliable, compliant,
          and professional security services across South Africa.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-outline">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
