import React, { useState } from "react";
import Button from "../components/Button";
import PlaceHolder from "../components/PlaceHolder";
import "./SignUp.css";

export default function SignUp() {
  const [userType, setUserType] = useState("patient"); // Default patient
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (formData.phoneNumber) {
      alert(`OTP sent to ${formData.phoneNumber}! (simulation)`);
    } else {
      alert("Please enter a phone number first.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Patient Sign Up Successful! (simulation)");
    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      otp: "",
    });
  };

  return (
    <div className="background" >
    <div className="block"  style={{ height: '85vh', marginTop: '10rem'}}>
    {/* <div className="Op-block"> */}
      <div className="signup-card">
        <h1>Sign Up</h1>

        {/* Toggle buttons */}
        <div className="tab-menu">
            <ul>
                <li>
                <a
                    href="#"
                    className={`tab ${userType === "doctor" ? "active" : ""}`}
                    onClick={(e) => { e.preventDefault(); setUserType("patient"); }}
                >
                    Patient
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={`tab ${userType === "patient" ? "active" : ""}`}
                    onClick={(e) => { e.preventDefault(); setUserType("doctor"); }}
                >
                    Doctor
                </a>
                </li>
            </ul>
            </div>

            <form onSubmit={handleSubmit}>
            <PlaceHolder
                name="username"
                placeholder="User Name"
                value={formData.username}
                onChange={handleChange}
                icon="fa-user"
                required
            />

            {/* AYUSH ID hidden in Patient form */}
            {userType === "doctor" && (
                <PlaceHolder
                name="ayushId"
                placeholder="AYUSH Registration ID"
                value={formData.ayushId}
                onChange={handleChange}
                icon="fa-id-card"
                required
                />
            )}

            <PlaceHolder
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                icon="fa-lock"
                required
            />

            <PlaceHolder
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                icon="fa-lock"
                required
            />

            <PlaceHolder
                name="phoneNumber"
                type="tel"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                icon="fa-phone"
                required
            />

            <div className="otp-group">
                <PlaceHolder
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                />
                <Button type="button" OnClick={handleSendOtp}>
                Get OTP
                </Button>
            </div>

            <Button type="submit">
            Sign Up
            </Button>
            </form>
        </div>
    </div>
    </div>
  );
}
