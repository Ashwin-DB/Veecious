import { useEffect, useRef, useState } from "react";

/* ---------- Hook for In-View Animations ---------- */
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

/* ---------- Sub-Service Item ---------- */
function SubServiceItem({ icon, text, delay }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`sub-service-card ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="sub-service-icon">{icon}</span>
      <span className="sub-service-text">{text}</span>
    </div>
  );
}

/* ---------- Service Category Card ---------- */
function ServiceCategory({ title, icon, items }) {
  const [cardRef, visible] = useInView();

  return (
    <div
      ref={cardRef}
      className={`service-category-card ${visible ? "show" : ""}`}
    >
      <div className="service-category-header">
        <div className="category-icon-box">{icon}</div>
        <h3>{title}</h3>
      </div>

      <div className="sub-service-list">
        {items.map((item, index) => (
          <SubServiceItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Services Component ---------- */
export default function Services() {
  const services = [
    {
      title: "Reaction & Guarding",
      icon: (
        <img
          src="https://img.icons8.com/ios-filled/50/shield.png"
          alt="Reaction & Guarding"
        />
      ),
      items: [
        {
          icon: (
            <img
              src="https://img.icons8.com/ios-filled/24/security-guard.png"
              alt="Armed & Unarmed Reaction"
            />
          ),
          text: "Armed & Unarmed Reaction",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/ios-filled/24/security-guard.png"
              alt="Armed & Unarmed Guards"
            />
          ),
          text: "Armed & Unarmed Guards",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/ios-filled/24/vip.png"
              alt="VIP Protection Services"
            />
          ),
          text: "VIP Protection Services",
        },
      ],
    },
    {
      title: "Commercial & Events",
      icon: (
        <img
          src="https://img.icons8.com/ios-filled/50/building.png"
          alt="Commercial & Events"
        />
      ),
      items: [
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=JjqrsC0b8EDf&format=png&color=000000"
              alt="Retail & Industrial Security"
            />
          ),
          text: "Retail & Industrial Security",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/ios-filled/24/crowd.png"
              alt="Crowd Control"
            />
          ),
          text: "Crowd Control",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=JjqrsC0b8EDf&format=png&color=000000"
              alt="Special Events Security"
            />
          ),
          text: "Special Events Security",
        },
      ],
    },
    {
      title: "Monitoring & Support",
      icon: (
        <img
          src="https://img.icons8.com/?size=100&id=69043&format=png&color=000000"
          alt="Monitoring & Support"
        />
      ),
      items: [
        {
          icon: (
            <img
              src="https://img.icons8.com/ios-filled/24/crowd.png"
              alt="Escort Services"
            />
          ),
          text: "Escort Services",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=52866&format=png&color=000000"
              alt="Patrol Services"
            />
          ),
          text: "Patrol Services",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=6421&format=png&color=000000"
              alt="CCTV Monitoring"
            />
          ),
          text: "CCTV Monitoring",
        },
      ],
    },
  ];

  return (
    <section id="services" className="section-light">
      <div className="container">
        <h2 className="section-title">
          Our <span className="accent">Services</span>
        </h2>

        <div className="services-main-grid">
          {services.map((service) => (
            <ServiceCategory
              key={service.title}
              title={service.title}
              icon={service.icon}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
