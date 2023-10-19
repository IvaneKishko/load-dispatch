import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LOADSDATA from "../../loadsData";
import "./UserLoads.css";
import LoadItem from "../components/LoadItem";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import errorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const UserLoads = () => {
  const [userLoads, setUserLoads] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(async () => {
    const fetchLoad = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/loads/user/${userId}`
        );
        setUserLoads(responseData.places);
      } catch (err) {}
    };
    fetchLoad();
  }, [sendRequest, userId]);

  // const userLoads = LOADSDATA.filter((load) => load.companyName === userId);
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
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {isLoading && userLoads && (
        <ul className="userLoads-list">
          {userLoads.map((load) => (
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
      )}
    </>
  );
};

export default UserLoads;
