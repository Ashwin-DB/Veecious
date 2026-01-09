import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const address =
    "205 Sediba House, 173 Bosman Street, CBD, Pretoria, Gauteng";

  const directionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=205+Sediba+House,+173+Bosman+Street,+Pretoria,+Gauteng,+South+Africa";

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

  const contactLines = [
    <p key="phone">
      <strong>Phone:</strong>{" "}
      <a href="tel:0834330177">083 433 0177</a> /{" "}
      <a href="tel:0828660160">082 866 0160</a>
    </p>,
    <p key="email1">
      <strong>Email:</strong>{" "}
      <a href="mailto:info@veecioussecuritysolutions.co.za">
        info@veecioussecuritysolutions.co.za
      </a>
    </p>,
    <p key="email2">
      <strong>Email:</strong>{" "}
      <a href="mailto:seremane@veecioussecuritysolutions.co.za">
        seremane@veecioussecuritysolutions.co.za
      </a>
    </p>,
    <p key="email3">
      <strong>Email:</strong>{" "}
      <a href="mailto:office@veecioussecuritysolutions.co.za">
        office@veecioussecuritysolutions.co.za
      </a>
    </p>,
    <p key="address">
      <strong>Address:</strong>{" "}
      <a href={directionsLink} target="_blank" rel="noopener noreferrer">
        {address}
      </a>
    </p>,
  ];

  return (
    <section id="contact" className="section-light">
      <div ref={containerRef} className="container contact-container">
        <h2 className={`section-title ${visible ? "slide-up" : ""}`}>
          Contact <span className="accent">Us</span>
        </h2>

        <div className="contact-card">
          {/* Contact Info */}
          <div className="contact-info">
            {contactLines.map((line, index) =>
              <div
                key={index}
                className={`contact-line ${visible ? "slide-up" : ""}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {line}
              </div>
            )}
          </div>

          {/* Map */}
          <div
            className={`contact-map ${visible ? "slide-up" : ""}`}
            style={{ transitionDelay: `${contactLines.length * 0.15}s` }}
          >
            <iframe
              title="Veecious Security Location"
              src="https://www.google.com/maps?q=205+Sediba+House,+173+Bosman+Street,+Pretoria,+Gauteng&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
