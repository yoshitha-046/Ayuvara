import Header from "../components/Header";
import AppointmentsCard from "../components/AppointmentsCard";
import FeaturesGrid from "../components/FeaturesGrid";
import "./DHomePage.css";

export default function DHomePage() {
  return (
    <div className="container">
      <Header />
      <AppointmentsCard />
      <FeaturesGrid />
    </div>
  );
}
