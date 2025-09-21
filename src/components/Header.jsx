import React from "react";
import "./Header.css";

export default function Header() {
  const [dateTime, setDateTime] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
      const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
      const formattedDate = now.toLocaleDateString("en-GB", dateOptions);
      const formattedTime = now.toLocaleTimeString("en-US", timeOptions).replace(" ", "");
      setDateTime(`${formattedDate} | ${formattedTime}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="profile">DN</div>
      <div className="header-info">
        <h1>Hello, Doctor</h1>
        <p className="date-time">{dateTime}</p>
      </div>
    </header>
  );
}
