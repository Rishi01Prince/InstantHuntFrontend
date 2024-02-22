import React, { useState, useEffect } from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="footer bg-dark text-muted">
    <div className="container">
      {/* <div className="container p-4 pb-0"> */}
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://cdn-icons-png.flaticon.com/512/25/25231.png" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       
        <span>© 2023 Instant Hunt, Inc. {time}</span>
    
      </div>
    </footer>
  );
}
