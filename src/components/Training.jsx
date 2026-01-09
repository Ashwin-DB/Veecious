import { useEffect, useRef, useState } from "react";
import trainingVideo from "../assets/training.mp4";

/* ---------- Reusable Hook (per element) ---------- */
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

/* ---------- Pricing Card (animated) ---------- */
function PricingCard({ combo, delay }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`pricing-card ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h4>{combo.name}</h4>
      <p className="pricing-amount">{combo.price}</p>
      <ul>
        {combo.details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- SubTrainingItem ---------- */
function SubTrainingItem({ icon, text, description, price, delay }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`sub-training-card ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="sub-training-icon">{icon}</span>
      <div className="sub-training-text">
        <h4>{text}</h4>
        <p>{description}</p>
        {price && <p className="training-price">{price}</p>}
      </div>
    </div>
  );
}

/* ---------- TrainingCategory ---------- */
function TrainingCategory({ title, icon, items }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`training-category-card ${visible ? "show" : ""}`}
    >
      <div className="training-category-header">
        <div className="category-icon-box">{icon}</div>
        <h3>{title}</h3>
      </div>

      <div className="sub-training-list">
        {items.map((item, index) => (
          <SubTrainingItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            description={item.description}
            price={item.price} // Added price here
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Training Component ---------- */
export default function Training() {
  const trainingPrograms = [
    {
      title: "Firearm Competency",
      icon: (
        <img
          src="https://img.icons8.com/?size=100&id=1265&format=png&color=000000"
          alt="Firearm"
        />
      ),
      items: [
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=38919&format=png&color=000000"
              alt="Handgun"
            />
          ),
          text: "Handgun",
          description: "Legal and practical competency training for handgun use",
          price: "R1,500",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=15925&format=png&color=000000"
              alt="Shotgun"
            />
          ),
          text: "Shotgun",
          description: "Safe handling and operational training for shotguns",
          price: "R1,800",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=15005&format=png&color=000000"
              alt="Self-Loading Rifle"
            />
          ),
          text: "Self-Loading Rifle",
          description: "Competency certification for self-loading firearms",
          price: "R2,000",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/ios-filled/24/manual.png"
              alt="Manual Rifle"
            />
          ),
          text: "Manual Operated Rifle",
          description: "Training for bolt-action and manually operated firearms",
          price: "R1,700",
        },
      ],
    },
    {
      title: "PSIRA Grades Training",
      icon: (
        <img
          src="https://img.icons8.com/ios-filled/50/graduation-cap.png"
          alt="PSIRA"
        />
      ),
      items: [
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=66729&format=png&color=000000"
              alt="Grade E"
            />
          ),
          text: "Grade E",
          description: "Entry-level security officer training",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=66727&format=png&color=000000"
              alt="Grade D"
            />
          ),
          text: "Grade D",
          description: "Intermediate security operations and procedures",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=66726&format=png&color=000000"
              alt="Grade C"
            />
          ),
          text: "Grade C",
          description: "Advanced guarding and operational training",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=66723&format=png&color=000000"
              alt="Grade B"
            />
          ),
          text: "Grade B",
          description: "Supervisory and team leadership training",
        },
        {
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=31002&format=png&color=000000"
              alt="Grade A"
            />
          ),
          text: "Grade A",
          description: "Management-level security operations and compliance",
        },
      ],
    },
  ];

  const pricingCombos = [
    {
      name: "Handgun Only",
      price: "R1,500",
      details: [
        "Legal & practical handgun training",
        "Assessment & certification",
      ],
    },
    {
      name: "Shotgun & Handgun",
      price: "R2,500",
      details: [
        "Shotgun training",
        "Handgun training",
        "Full assessment",
      ],
    },
    {
      name: "Complete Firearm Package",
      price: "R4,000",
      details: [
        "Handgun, Shotgun, Self-loading, Manual Rifle",
        "Assessment & Certification",
      ],
    },
  ];

  return (
    <section id="training" className="section-light">
      <div className="container">
        <h2 className="section-title">
          Training <span className="accent">Academy</span>
        </h2>

        <p className="training-intro">
          Veecious Security Solutions offers accredited security training programs
          designed to meet industry standards and regulatory compliance.
        </p>

        <div className="training-video-card">
          <video
            src={trainingVideo}
            loop
            muted
            autoPlay
            playsInline
          />
        </div>

        <div className="training-main-grid">
          {trainingPrograms.map((program) => (
            <TrainingCategory
              key={program.title}
              title={program.title}
              icon={program.icon}
              items={program.items}
            />
          ))}
        </div>

        {/* ---------- PRICING (container NOT animated) ---------- */}
        <div className="training-pricing-card">
          <h3>Training Packages & Estimated Costs</h3>

          <div className="pricing-grid">
            {pricingCombos.map((combo, index) => (
              <PricingCard
                key={combo.name}
                combo={combo}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
