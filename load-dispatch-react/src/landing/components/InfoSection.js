import React from "react";

import "./InfoSection.css";
import truck from "../../assets/images/goods-on-transit-one.jpg";

const InfoSection = () => {
  return (
    <>
      <section className="info-section">
        <div className="info-section__card">
          <div className="info-section__card-text">
            <h3>How it Works? - Clients</h3>
            <p>
              <span className="span-bold">Sign Up</span> - Create your free
              account to get started.
              <br />
              <span className="span-bold">Post Your Load</span> - List your
              cargo or automobile details, including pick-up and drop-off
              locations, weight, and contact info.
              <br />
              <span className="span-bold">Wait for Transporters</span> -
              Transportation companies will contact you in the matter of minutes
              <br />
              <span className="span-bold">Review Offers</span> - Transporters
              interested in your listing will contact you. Discuss terms and
              make your choice.
              <br />
              <span className="span-bold">Schedule</span> - Transportation:
              Coordinate pickup and delivery dates with your chosen transporter.
              Your Items Are On The
              <br />
              <span className="span-bold">Move</span> - Track your cargo or
              automobile until it safely reaches its destination.
            </p>
          </div>
          <img src={truck} alt="truck" />
        </div>
        <div className="info-section__card">
          <div className="info-section__card-text">
            <h3>
              How it Works? - <span className="span-bold">Transporters</span>
            </h3>
            <p>
              <span className="span-bold">Sign Up</span> - Create your free
              account to get started.
              <br />
              <span className="span-bold">Discover Premium Loads</span> - Explore the best transportation opportunities in your vicinity with our advanced filter capabilities. Ensure seamless logistics by selecting the ideal loads for your needs.
              <br />
              <span className="span-bold">Engage with Clients</span> - Foster meaningful connections by seamlessly reaching out to clients at your
              <br />
              <span className="span-bold">Schedule Transportation</span> - Optimize your transportation plans by effortlessly coordinating pickup and delivery dates with clients.
              <br />
              <span className="span-bold">Transport with Confidence</span> - Monitor your consignments in real-time, ensuring each shipment arrives at its destination securely and on time.
            </p>
          </div>
          <img src={truck} alt="truck" />
        </div>
      </section>
    </>
  );
};

export default InfoSection;
