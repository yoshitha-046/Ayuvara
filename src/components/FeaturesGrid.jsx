import React, { useState } from "react"; 
import FeatureCard from "./FeatureCard"; 
import "./FeaturesGrid.css"; 

export default function FeaturesGrid() { const [activeCard, setActiveCard] = useState("view-patients");

  const features = [ 
  { id: "create-profile", icon: "/DB1.svg", title: "Create New Profile", description: "Add patient profile" },
  { id: "view-patients", icon: "/DB2.svg", title: "Patients", description: "View patient history" }, 
  { id: "diet-plans", icon: "/DB3.svg", title: "Diet Plans", description: "Ayurvedic diet tips" }, 
  { id: "appointments", icon: "/DB4.svg", title: "Appointments", description: "Manage consultations" }, 
  { id: "patient-progress", icon: "/DB5.svg", title: "Patient Progress", description: "Track health improvements", fullWidth: true }, // ✅ last one full width
];



  const handleClick = (id) => {
    setActiveCard(id);
    alert(`Redirecting to ${id.replace("-", " ")} page!`);
  };

  return (
    <section className="features-grid">
      {features.map((card) => (
        <FeatureCard
          key={card.id}
          id={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
          active={activeCard === card.id}
          onClick={handleClick}
          fullWidth={card.fullWidth}   // ✅ pass it down
        />
      ))}
    </section>
  );
}
