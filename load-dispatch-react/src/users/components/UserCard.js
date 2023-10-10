import React from "react";

import "./UserCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const UserCard = (props) => {
  return (
    <main className="user-card">
      <div>
        <h2>Company: {props.companyName}</h2>
        <h4>
          <a href={`tel:${props.phone}`}>Phone: {props.phone}</a>
        </h4>
        <h4>Joined: {props.joinDate}</h4>
      </div>
      <div>
        <h4>Insurance: {props.insurance}</h4>
        <h4>Number of trucks: {props.numberOfTrucks}</h4>
        <h4>
          Rating: {props.rating}{" "}
          <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
        </h4>
      </div>
      <div>
        <h4>Address: {props.address}</h4>
        <h4>Email: {props.email}</h4>
        <h4>Certified: {props.certified}</h4>
      </div>
    </main>
  );
};

export default UserCard;
