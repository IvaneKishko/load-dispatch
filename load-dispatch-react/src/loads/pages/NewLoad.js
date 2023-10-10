import React, { useState } from "react";
import Select from "react-select";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LOCATIONDATA from "../../locationData";
import "./NewLoad.css";


const NewLoad = () => {
  // const today = new Date().toISOString().split("T")[0];

  const [formState, setFormState] = useState({
    model: {
      value: "",
      isValid: false,
    },
    payment: {
      value: "",
      isValid: false,
    },
    price: {
      value: "",
      isValid: false,
    },
    pickupDate: {
      value: "",
      isValid: false,
    },
    pickupLocation: {
      value: "",
      isValid: false,
    },
    dropOffLocation: {
      value: "",
      isValid: false,
    },
    isValid: false,
  });

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState); //send this to backend
  };

  function handleChange(eventOrSelectedOption) {
    const { name, value } = eventOrSelectedOption.target
      ? eventOrSelectedOption.target
      : eventOrSelectedOption;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, value);
  }

  return (
    <form className="load-form" onSubmit={placeSubmitHandler}>
      <Input
        id="model"
        element="input"
        type="text"
        label="Model"
        name="model"
        onChange={handleChange}
        value={formState.model.value}
        required
      />
      <fieldset className="radio-buttons">
        <legend>Payment Method</legend>
        <Input
          element="radio"
          type="radio"
          id="cash"
          label="Cash"
          name="payment"
          value="cash"
          checked={formState.payment === "cash"}
          onChange={handleChange}
        />
        <Input
          element="radio"
          type="radio"
          id="direct"
          label="Direct"
          name="payment"
          value="direct"
          checked={formState.payment === "direct"}
          onChange={handleChange}
        />
        <Input
          element="radio"
          type="radio"
          id="check"
          label="Check"
          name="payment"
          value="check"
          checked={formState.payment === "check"}
          onChange={handleChange}
        />
      </fieldset>
      <Input
        id="price"
        element="input"
        type="number"
        label="Price USD$"
        name="price"
        onChange={handleChange}
        value={formState.price.value}
        required
      />
      <Input
        id="pickupDate"
        element="date"
        type="date"
        label="Ready for Pickup"
        name="pickupDate"
        onChange={handleChange}
        value={formState.pickupDate.value}
      />
      {/* <div>
          <label htmlFor="pickup-location">Pickup Location</label>
          <input 
              id="pickup-location" 
              list="data" 
              placeholder="Enter or select a pickup location" 
              className="dropdown-input"
          />
          <datalist id="data" className="datalist">
              {LOCATIONDATA.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
              ))}
          </datalist>
      </div> */}
      <div>
        <label htmlFor="pickupLocation">Pickup location:</label>
        <Select
          options={LOCATIONDATA}
          id="pickupLocation"
          onChange={option => handleChange({ ...option, name: 'pickupLocation' })} 
          name="pickupLocation"
          required
        />
      </div>
      <div>
        <label htmlFor="dropOffLocation">Drop off location:</label>
        <Select
          options={LOCATIONDATA}
          id="dropOffLocation"
          onChange={option => handleChange({ ...option, name: 'dropOffLocation' })} 
          name="dropOffLocation"
          required
        />
      </div>
      <Button type="submit">ADD LOAD</Button>
    </form>
  );
};

export default NewLoad;
