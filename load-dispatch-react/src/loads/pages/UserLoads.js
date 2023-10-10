import React from "react";
import { useParams } from "react-router-dom";

import LOADSDATA from "../../loadsData";
import "./UserLoads.css";
import LoadItem from "../components/LoadItem";
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

const UserLoads = () => {
  const userId = useParams().userId;
  const userLoads = LOADSDATA.filter((load) => load.companyName === userId);
  console.log(userLoads);

  if (userLoads.length === 0) {
    return (
      <div className="userLoads-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/loads/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="userLoads-list">
      {userLoads.map(load => (
        <LoadItem
          key={load.id}
          model={load.model}
          image={load.image}
          payment={load.payment}
          price={load.price}
          companyName={load.companyName}
          phone={load.phone}
          pickupPlace={load.pickupPlace}
          dropOffPlace={load.dropOffPlace}
          pickupDate={load.pickupDate}
          id={load.id}
        />
      ))}
    </ul>
  );
};

export default UserLoads;
