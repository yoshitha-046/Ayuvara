import "./OptionPage.css";
import Button from "../components/Button";

export default function OptionPage() {
  return (
    <div className="background">
      {/* Logo at the top */}
      <img src="/Ayuvara.svg" alt="Logo" className="logo"/>

      <div className="block">
        <div className="Op-block">
          {/* Patient Login Button */}
          <Button>Patient Login</Button>

          {/* Middle Text */}
          <p className="doctor-text">
            <span className="doctor-title">Doctor ? </span>
            <span className="doctor-tap">Tap here</span>
          </p>

          {/* Arrow below */}
          <img src="/arrow.svg" alt="Arrow" className="arrow" />

          {/* Doctor Login Button */}
          <Button>Doctor Login</Button>
        </div>
      </div>
    </div>
  );
}
