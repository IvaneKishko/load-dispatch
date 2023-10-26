import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LOCATIONDATA from "../../locationData";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth.context";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import "./NewLoad.css";

const NewLoad = () => {
  // const today = new Date().toISOString().split("T")[0];
  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, setFormState] = useState({
    model: {
      value: "",
      isValid: false,
    },
    address: {
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
    phoneNumber: {
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
    image: {
      value: null,
      isValid: false,
    },
    isValid: true,
  });

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Sending token:", auth.companyName);
    try {
      const formData = new FormData();
      formData.append("model", formState.model);
      formData.append("pickupDate", formState.pickupDate);
      formData.append("pickupLocation", formState.pickupLocation);
      formData.append("dropOffLocation", formState.dropOffLocation);
      formData.append("price", formState.price);
      formData.append("phoneNumber", formState.phoneNumber);
      formData.append("payment", formState.payment);
      formData.append("address", formState.address);
      formData.append("image", formState.image.value);
      formData.append("companyName", auth.companyName);
      await sendRequest("http://localhost:5000/api/loads", "POST", formData, {
        Authorization: "Bearer " + auth.token,
      });
      navigate(`/${auth.userId}/loads`);
    } catch (err) {}
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

  const imageInputHandler = (name, value, isValid) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <form className="load-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
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
        <Input
          id="address"
          element="input"
          type="text"
          label="Full address"
          name="address"
          onChange={handleChange}
          value={formState.address.value}
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
          id="phoneNumber"
          element="input"
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          onChange={handleChange}
          value={formState.phoneNumber.value}
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
            onChange={(option) =>
              handleChange({ ...option, name: "pickupLocation" })
            }
            name="pickupLocation"
            required
          />
        </div>
        <div>
          <label htmlFor="dropOffLocation">Drop off location:</label>
          <Select
            options={LOCATIONDATA}
            id="dropOffLocation"
            onChange={(option) =>
              handleChange({ ...option, name: "dropOffLocation" })
            }
            name="dropOffLocation"
            required
          />
        </div>
        <ImageUpload
          id="image"
          onInput={imageInputHandler}
          required
          center
          errorText=""
        />
        <Button type="submit">ADD LOAD</Button>
      </form>
    </>
  );
};

export default NewLoad;
