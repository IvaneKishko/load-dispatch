import React, { useState } from "react";
import { useParams } from "react-router-dom";

import LOADSDATA from "../../loadsData";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "./UpdateLoad.css";

const UpdateLoad = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loadId = useParams().loadId;
  const load = LOADSDATA.find((e) => e.id === loadId);

  const [formState, setFormState] = useState({
    model: {
      value: load.model,
      isValid: true,
    },
    price: {
      value: load.price,
      isValid: true,
    },
    isValid: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setIsLoading(false);
  };

  const loadUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  if (!load) {
    return (
      <div className="center">
        <h2>Could not find the load</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
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
      <Button type="submit" >
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdateLoad;
