import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import LOADSDATA from "../../loadsData";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth.context";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./UpdateLoad.css";

const UpdateLoad = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [load, setLoad] = useState();
  const loadId = useParams().loadId;
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    model: {
      value: "",
      isValid: true,
    },
    price: {
      value: "",
      isValid: true,
    },
    isValid: true,
  });

  useEffect(() => {
    const fetchLoad = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/loads/${loadId}`,
          "GET",
          null,
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          }
        );
        setLoad(responseData.load);
        console.log(responseData.load.model, responseData.load.price);
        setFormState({
          model: {
            value: responseData.load.model,
            isValid: true,
          },
          price: {
            value: responseData.load.price,
            isValid: true,
          },
          isValid: true,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchLoad();
  }, [sendRequest, loadId, setFormState]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
    // setIsLoading(false);
  };

  const loadUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formState.model.value, formState.price.value);
    console.log(auth.token);
    try {
      await sendRequest(
        `http://localhost:5000/api/loads/${loadId}`,
        "PATCH",
        JSON.stringify({
          model: formState.model.value,
          price: formState.price.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      navigate(`/loads/${loadId}`);
    } catch (err) {
      console.error(err);
    }
  };

  if (!load && !error) {
    return (
      <div className="center">
        <h2>Could not find the load</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }
  console.log(formState.model, formState.price);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && load && (
        <form className="load-form" onSubmit={loadUpdateSubmitHandler}>
          <Input
            id="model"
            element="input"
            type="text"
            label="Model"
            name="model"
            onChange={handleChange}
            value={formState.model.value}
          />{" "}
          <Input
            id="price"
            element="input"
            type="number"
            label="Price USD$"
            name="price"
            onChange={handleChange}
            value={formState.price.value}
          />
          <Button type="submit">UPDATE PLACE</Button>
        </form>
      )}
    </>
  );
};

export default UpdateLoad;
