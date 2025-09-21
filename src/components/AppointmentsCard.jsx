import React from "react";
import "./AppointmentsCard.css";


export default function AppointmentsCard() {
  const appointments = [
    { name: "Mounith", time: "09:30 AM" },
    { name: "Sanjana Reddy", time: "11:00 AM" },
    { name: "Vijay Prajapati", time: "12:30 PM" },
    { name: "Vijay Prajapati", time: "01:00 PM" },
    { name: "Vijay Prajapati", time: "02:30 PM" },
  ];

  return ( 
    <section className="appointments-card">
      <div className="card-header">
        <h2>Today's Appointments</h2>
        <img src="/calendar.svg" alt="Calendar Icon" style={{ width: "6rem", height: "6rem" , marginTop:"2rem" }} />

      </div>
      <div className="appointments-inner">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, idx) => (
              <tr key={idx}>
                <td>{appt.name}</td>
                <td>{appt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
