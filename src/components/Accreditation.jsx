import { useEffect, useRef, useState } from "react";
import saps from "../assets/saps.png";
import pftc from "../assets/pftc.png";
import psira from "../assets/psira.png";
import sasseta from "../assets/sasseta-logo.jpg";
import sasa from "../assets/sasa.jpeg";

/* Reusable hook */
function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

function AccreditationItem({ logo, alt, delay }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`accreditation-item animate-item ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <img
        src={logo}
        alt={`${alt} logo`}
        className="accreditation-logo"
      />
    </div>
  );
}

export default function Accreditation() {
  const logos = [
    { logo: saps, alt: "SAPS" },
    { logo: pftc, alt: "PFTC" },
    { logo: psira, alt: "PSIRA" },
    { logo: sasseta, alt: "SASSETA" },
    { logo: sasa, alt: "SASA" },
  ];

  return (
    <section id="accreditation" className="section-dark">
      <div className="container">
        <h2 className="section-title">
          Our <span className="accent">Accreditation</span>
        </h2>

        <div className="accreditation-grid">
          {logos.map((item, index) => (
            <AccreditationItem
              key={item.alt}
              logo={item.logo}
              alt={item.alt}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
