import React from "react";

import "./InfoSection.css";
import truck from "../../assets/images/goods-on-transit-one.jpg";

const InfoSection = () => {
  return (
    <>
      <section className="info-section">
        <div className="info-section__card">
          <div className="info-section__card-text">
            <h3>How it Works?</h3>
            <p>
              Sign Up: Create your free account to get started.
              Post Your Load: List your cargo or automobile details, including
              pick-up and drop-off locations, weight, dimensions, and contact
              info. Get Matched: Your transportation request is now visible to
              our network of verified transporters. Review Offers: Transporters
              interested in your listing will contact you. Discuss terms and
              make your choice. Schedule Transportation: Coordinate pickup and
              delivery dates with your chosen transporter. Your Items Are On The
              Move: Track your cargo or automobile until it safely reaches its
              destination.
            </p>
          </div>
          <img src={truck} alt="truck" />
        </div>
        <div className="info-section__card">
          <div className="info-section__card-text">
            <h3>How it Works?</h3>
            <p>
              We are Cargo transportation firm with great reputation in Timely
              delivery of goods both In the country, our region and world-wide.
              We ferry goods in High Quality Storage facilities that can handles
              any category of goods , perishable or non-perishable, high-risk
              goods and the vice , imports or exports, large quantity or small
              quantity and many more.. we've been in business operation for over
              100 years and we have thrive in the market for we have given the
              best Services to our esteemed customers and companies that
              entrusted us with their goods. We are looking forward to give our
              Services at an affordable price that suites all individuals and
              striving small companies. Our customers have given best reviews
              concerning the kind of Services we offer to them.
            </p>
          </div>
          <img src={truck} alt="truck" />
        </div>
      </section>
    </>
  );
};

export default InfoSection;
