import { useState, useEffect } from "react";

export default function FloatingActionBar() {
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUpArrow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-bar">
      {/* Phone */}
      <a href="tel:0834330177" className="fab-item" title="Call Us">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
          alt="Call"
        />
      </a>

      {/* Email */}
      <a href="mailto:info@veecioussecuritysolutions.co.za" className="fab-item" title="Email Us">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
          alt="Email"
        />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/27834330177"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-item"
        title="WhatsApp"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
          alt="WhatsApp"
        />
      </a>

      {/* Scroll Up */}
      {showUpArrow && (
        <button className="fab-item" onClick={scrollToTop} title="Back to Top">
          <img
            src="https://img.icons8.com/?size=100&id=c26HVvJcehMV&format=png&color=000000"
            alt="Up"
          />
        </button>
      )}
    </div>
  );
}
