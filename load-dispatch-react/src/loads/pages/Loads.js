import React, { useState } from "react";
import LOADSDATA from "../../loadsData";
import Filter from "../components/Filter";
import LoadsList from "../components/LoadsList";
import "./Loads.css";

const Loads = (props) => {
  const [loadsData] = useState(LOADSDATA);
  const [selectedPickupLocation, setSelectedPickupLocation] = useState(null);
  const [selectedDropOffLocation, setSelectedDropOffLocation] = useState(null);
  const [selectedMinPrice, setSelectedMinPrice] = useState(null);

  const resetFilters = (event) => {
    event.preventDefault();
    setSelectedPickupLocation(null);
    setSelectedDropOffLocation(null); 
    setSelectedMinPrice(null);
  };

  const applyFilters = () => {
    return loadsData.filter((load) => {
      const pickupLocationMatches = 
        !selectedPickupLocation || load.pickupPlace === selectedPickupLocation;
      const dropOffLocationMatches = 
        !selectedDropOffLocation || load.dropOffPlace === selectedDropOffLocation;
      const priceMatches = !selectedMinPrice || load.price >= selectedMinPrice;

      return pickupLocationMatches && dropOffLocationMatches && priceMatches;
    });
  };

  const handlePickupLocationChange = (location) => {
    setSelectedPickupLocation(location);
  };

  const handleDropOffLocationChange = (location) => {
    setSelectedDropOffLocation(location);
  };

  const handleMinPriceChange = (minPrice) => {
    setSelectedMinPrice(minPrice);
  };

  return (
    <main className="loads-main">
      <Filter
        onPickupLocationChange={handlePickupLocationChange}
        onDropOffLocationChange={handleDropOffLocationChange}
        onMinPriceChange={handleMinPriceChange}
        onResetFilters={resetFilters}
      />
      <LoadsList items={applyFilters()} />
    </main>
  );
};

export default Loads;
