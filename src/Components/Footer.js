import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const intervalId = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <footer className="footer fixed-bottom bg-dark">
        <div className="container">
          <span className="text-muted">© 2023 Instant Hunt, Inc. {time}</span>
        </div>
      </footer>
    </div>
  );
}
