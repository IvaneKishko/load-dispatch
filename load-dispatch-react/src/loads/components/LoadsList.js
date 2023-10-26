import React from "react";

import LoadItem from "./LoadItem";
import "./LoadsList.css";
import Card from "../../shared/components/UIElements/Card";

const LoadsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No loads found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="loads-list">
      {props.items.map((load) => (
        <LoadItem
          key={load.id}
          id={load.id}
          price={load.price}
          model={load.model}
          payment={load.payment}
          companyName={load.companyName}
          pickupDate={load.pickupDate}
          dropOffDate={load.dropOffDate}
          phoneNumber={load.phoneNumber}
          pickupLocation={load.pickupLocation}
          dropOffLocation={load.dropOffLocation}
          image={load.image}
        />
      ))}
    </ul>
  );
};

export default LoadsList;
