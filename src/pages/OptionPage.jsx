import "./OptionPage.css";
import Button from "../components/Button";
export default function OptionPage() {
  return (
    <div className="background">
        <div className="block">
            <div className="Op-block">
            {/* Patient Login Button */}
            <Button>Patient Login</Button>

            {/* Middle Text */}
            <p className="text-[#B8860B] [font-family:'Arial','Helvetica',sans-serif]"> <span className="text-[2.5rem] [font-weight:700]"> 
                Doctor ? 
            </span> 
            <span className="[font-family:'Poppins'] [font-weight:400] text-[2.25rem] [font-weight:600] text-center cursor-pointer" > 
                Tap here
            </span>
            </p>

            {/* Add space and SVG below */}
            <img src="/arrow.svg" alt="Arrow" className="w-[50px] h-[50px] mt-10"  />

            {/* Doctor Login Button */}
            <Button>Doctor Login</Button>
            </div>
        </div>
    </div>
  );
}
