import { useEffect, useRef, useState } from "react";
import image2 from "../assets/image2.jpeg";
import image5 from "../assets/image5.jpeg";

export default function About() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-dark">
      <div
        ref={containerRef}
        className={`container about-container ${visible ? "slide-up" : ""}`}
      >
        <h2 className="section-title">
          About Veecious <span className="accent">Security</span> Solutions
        </h2>

        <p className="about-intro">
          Veecious Security Solutions (PTY) Ltd is a registered security company
          committed to delivering professional, reliable, and compliant
          security services across South Africa. We specialize in armed and
          unarmed guarding, VIP protection, event security, CCTV monitoring, and
          security training.
        </p>

        <div className="about-images">
          <div className="about-image-card">
            <img src={image2} alt="Security Team" />
          </div>
          <div className="about-image-card">
            <img src={image5} alt="Security Operations" />
          </div>
        </div>
      </div>
    </section>
  );
}
