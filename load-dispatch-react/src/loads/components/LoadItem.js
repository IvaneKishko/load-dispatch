import React from "react";
import { Link } from "react-router-dom";

import "./LoadItem.css";

const LoadItem = (props) => {
  return (
    <Link to={`/loads/${props.id}`}>
      <li className="load-item">
        <div className="load-item__price-model">
          <h4>${props.price}</h4>
          <h4>{props.model}</h4>
          <span>{props.payment} / Certified</span>
        </div>
        <div className="load-item__company-date">
          <span className="load-item__label">Company</span>
          <h4>{props.companyName}</h4>
          <span className="load-item__label">Pickup Date</span>
          <span>{props.pickupDate}</span>
          <a href={`tel:${props.phone}`}>
            <span>Tel: {props.phone}</span>
          </a>
        </div>
        <div className="load-item__pick-drop">
          <a>
            <span className="load-item__label">Pickup Location</span>
            <h4>{props.pickupPlace}</h4>
          </a>
          <a>
            <span className="load-item__label">Destination</span>
            <h4>{props.dropOffPlace}</h4>
          </a>
        </div>
        <div>
          <img src={props.image} alt="car" className="load-item__pick-drop__img"/>
        </div>
      </li>
    </Link>
  );
};

export default LoadItem;