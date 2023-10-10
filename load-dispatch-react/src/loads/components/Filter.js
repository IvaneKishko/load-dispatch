import React, { useState } from "react";
import Select from "react-select";

import LOCATIONDATA from "../../locationData";
import Button from '../../shared/components/FormElements/Button';
import "./Filter.css";

const Filter = (props) => {
  const [inputMinPrice, setInputMinPrice] = useState("");

  const handlePickupCityChange = (selectedOption) => {
    props.onPickupLocationChange(
      selectedOption ? selectedOption.value.split(",")[0] : null
    );
  };

  const handleDropOffCityChange = (selectedOption) => {
    props.onDropOffLocationChange(
      selectedOption ? selectedOption.value.split(",")[0] : null
    );
  };

  const handleMinPriceChange = () => {
    props.onMinPriceChange(Number(inputMinPrice) || null);
  };

  return (
    <form className="filter-form">
      <div>
        <label htmlFor="pickupLocation" className="filter-label">
          Pickup Location:
        </label>
        <Select
          options={LOCATIONDATA}
          id="pickupLocation"
          name="pickupLocation"
          value={props.selectedPickupLocation}
          onChange={handlePickupCityChange}
        />
      </div>
      <div>
        <label htmlFor="dropOffLocation" className="filter-label">
          Drop Off Location:
        </label>
        <Select
          options={LOCATIONDATA}
          id="dropOffLocation"
          name="dropOffLocation"
          value={props.selectedDropOffLocation}
          onChange={handleDropOffCityChange}
        />
      </div>
      <div>
        <label htmlFor="minPrice" className="filter-label">
          Minimum Price:
        </label>
        <input
          type="number"
          id="minPrice"
          placeholder="Min Price"
          value={inputMinPrice}
          onChange={(e) => setInputMinPrice(e.target.value)}
          onBlur={handleMinPriceChange}
        />
      </div>
      <Button onClick={props.onResetFilters}>Clear Filters</Button>
    </form>
  );
};

export default Filter;
