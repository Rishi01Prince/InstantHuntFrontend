import React from 'react';
import './Aboutus.css';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <h2 className="about-us__heading">About Us</h2>
        <p className="about-us__description">
          At our vehicle renting service, we believe that everyone should have access to safe, reliable transportation. That's why we offer a variety of rental options for both half-day and full-day rentals. Whether you're looking to run errands or take a road trip, we have the perfect vehicle for your needs.
        </p>
        <p className="about-us__description">
          Our team of experienced professionals is dedicated to providing the best customer service possible. We're here to answer any questions you may have and to help you find the right rental for your needs. With our easy online booking system, renting a vehicle has never been easier.
        </p>
        <p className="about-us__description">
          So why wait? Book your rental today and experience the freedom of the open road with our reliable and affordable vehicles.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
