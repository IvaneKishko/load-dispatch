import React from "react";

import './MainSection.css';

const MainSection = () => {
  return (
    <main className="main-section">
      <video autoPlay="autoplay" loop="loop" muted className="main-section__video">
        <source src="https://www.centraldispatch.com/videos/truck.webm" type="video/webm" />
      </video>
      <div className="main-section__image"></div>
      <div className="main-section__content">
        <h1>Georgia's Largest Transportation Marketplace</h1>
        <div className="main-section__content-roles">
          <div className="main-section__content-roles__card">
            <h3>Shippers</h3>
            <button className="roles-btn">I need to ship Vehicles</button>
          </div>
          <div className="main-section__content-roles__card">
            <h3>Brokers</h3>
            <button className="roles-btn">I am an auto transportation broker</button>
          </div>
          <div className="main-section__content-roles__card">
            <h3>Carriers</h3>
            <button className="roles-btn">I am an auto carrier</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
