import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import LOADSDATA from "../../loadsData";
import "./UserLoads.css";
import LoadsList from "../components/LoadsList";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth.context";

const UserLoads = () => {
  const auth = useContext(AuthContext);
  const [userLoads, setUserLoads] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchLoad = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/loads/user/${userId}`,
          "GET",
          null,
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          }
        );
        setUserLoads(responseData.loads);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLoad();
  }, [sendRequest, userId]);

  return (
    <main className="user-loads__main">
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && userLoads && (
        <ul className="userLoads-list">
          <LoadsList items={userLoads} />
        </ul>
      )}
    </main>
  );
};

export default UserLoads;
