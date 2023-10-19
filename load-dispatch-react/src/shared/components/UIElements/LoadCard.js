import React from "react";

import "./LoadCard.css";

const LoadCard = (props) => {
  return (
    <section className="load-card">
      <div className="load-card__auto">
        <h4>{props.model}</h4>
        <img src={props.image} alt="car" />
      </div>
      <div className="load-card__content">
        <span>{props.payment} / Certified</span>
        <h4>${props.price}</h4>
        <span className="load-item__label">Company</span>
        <h4>{props.companyName}</h4>
        <a href={`tel:${props.phone}`}>
          <span>Tel: {props.phone}</span>
        </a>
      </div>
      <div className="load-item__pick-drop">
        <a>
          <span className="load-item__label">Pickup Location</span>
          <h4>{props.pickupLocation}</h4>
        </a>
        <a>
          <span className="load-item__label">Destination</span>
          <h4>{props.dropOffPlace}</h4>
        </a>
        <a>
          <span className="load-item__label">Pickup Date</span>
          <span>{props.pickupDate}</span>
        </a>
      </div>
    </section>
  );
};

export default LoadCard;
