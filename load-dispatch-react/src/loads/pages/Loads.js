import React, { useState, useEffect } from "react";
import LOADSDATA from "../../loadsData";
import Filter from "../components/Filter";
import LoadsList from "../components/LoadsList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./Loads.css";

const Loads = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadsData, setLoadsData] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(false);
      try {
        const response = await fetch("http://localhost:5000/api/loads/");

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadsData(responseData.loads);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

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
        !selectedDropOffLocation ||
        load.dropOffPlace === selectedDropOffLocation;
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
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <Filter
        onPickupLocationChange={handlePickupLocationChange}
        onDropOffLocationChange={handleDropOffLocationChange}
        onMinPriceChange={handleMinPriceChange}
        onResetFilters={resetFilters}
      />
      {!isLoading && loadsData && <LoadsList items={applyFilters()} />}
    </main>
  );
};

export default Loads;
