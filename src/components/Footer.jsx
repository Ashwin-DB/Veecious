import { useEffect, useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

/* ---------- Reusable Hook for slide-up animation ---------- */
function useInView(options = { threshold: 0.15 }) {
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

export default function Footer() {
  const [companyRef, companyVisible] = useInView();
  const [contactRef, contactVisible] = useInView();
  const [linksRef, linksVisible] = useInView();
  const [bottomRef, bottomVisible] = useInView();

  const directionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=205+Sediba+House,+173+Bosman+Street,+Pretoria,+Gauteng,+South+Africa";

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div
          ref={companyRef}
          className={`footer-section ${companyVisible ? "show" : ""}`}
          style={{ transitionDelay: "0s" }}
        >
          <h3>Veecious Security</h3>
          <p>Company No: 2020/900992/07</p>
          <p>VAT No: 4320317516</p>
          <p>SARS Ref: 9450148201</p>

          <h3>Address</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" />{" "}
            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              205 Sediba House, 173 Bosman Street, CBD, Pretoria, Gauteng
            </a>
          </p>
        </div>

        {/* Contact */}
        <div
          ref={contactRef}
          className={`footer-section ${contactVisible ? "show" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <h3>Contact</h3>
          <p>
            <FaPhone className="footer-icon" />{" "}
            <a href="tel:0834330177">083 433 0177</a> /{" "}
            <a href="tel:0828660160">082 866 0160</a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />{" "}
            <a href="mailto:info@veecioussecuritysolutions.co.za">
              info@veecioussecuritysolutions.co.za
            </a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />{" "}
            <a href="mailto:seremane@veecioussecuritysolutions.co.za">
              seremane@veecioussecuritysolutions.co.za
            </a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />{" "}
            <a href="mailto:office@veecioussecuritysolutions.co.za">
              office@veecioussecuritysolutions.co.za
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div
          ref={linksRef}
          className={`footer-section ${linksVisible ? "show" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#training">Training</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        ref={bottomRef}
        className={`footer-bottom ${bottomVisible ? "show" : ""}`}
        style={{ transitionDelay: "0.3s" }}
      >
        <p>
          © {new Date().getFullYear()} Veecious Security Solutions (PTY) Ltd.
          All Rights Reserved By{" "}
          <a
            href="https://singularitytech.co.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            SingularityTech
          </a>
        </p>
      </div>
    </footer>
  );
}
