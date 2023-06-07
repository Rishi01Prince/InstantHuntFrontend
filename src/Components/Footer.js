import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const intervalId = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
       <footer class="footer">
        <div class="container1">
            <div class="row">
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Our Services</a></li>
                        <li><a href='#'>Privacy Policy </a></li>
                        <li><a href='#'>Affiliate Program</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Shipping</a></li>
                        <li><a href='#'>Returns</a></li>
                        <li><a href='#'>Order Status</a></li>
                        <li><a href='#'>Payment Options</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Online Shop</h4>
                    <ul>
                        <li><a href='#'>Phagwara</a></li>
                        <li><a href='#'>Patna</a></li>
                        <li><a href='#'>Delhi</a></li>
                        <li><a href='#'>Banglore</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">

                        <a href="#"><i class="fa fa-facebook-f"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-linkedin-in"></i></a>


                    </div>
                </div>
            </div>
        </div>


    </footer>
      <footer className="footer fixed-bottom bg-dark">
        <div className="container">
          <span className="text-muted">© 2023 Instant Hunt, Inc. {time}</span>
        </div>
      </footer>
    </div>
  );
}
