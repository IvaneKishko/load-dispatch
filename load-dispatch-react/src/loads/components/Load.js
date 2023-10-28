import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import "./Load.css";
import LoadCard from "../../shared/components/UIElements/LoadCard";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth.context";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Load = () => {
  const [load, setLoad] = useState();
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const loadId = useParams().loadId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoad = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/loads/${loadId}`,
          "GET",
          null,
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          }
        );
        setLoad(responseData.load);
      } catch (err) {}
    };
    fetchLoad();
  }, [sendRequest, loadId]);

  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/loads/${loadId}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
    } catch (err) {}
    navigate(`/loads`);
  };
  console.log(auth.companyName);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && load && (
        <>
          <Modal
            show={showMap}
            onCancel={closeMapHandler}
            header={load.pickupLocation}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
          >
            <div className="map-container">
              <Map center={load.location} zoom={16} />
            </div>
          </Modal>
          <Modal
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header="Are you sure?"
            footerClass="place-item__modal-actions"
            footer={
              <React.Fragment>
                <Button inverse onClick={cancelDeleteHandler}>
                  CANCEL
                </Button>
                <Button danger onClick={confirmDeleteHandler}>
                  DELETE
                </Button>
              </React.Fragment>
            }
          >
            <p>Do you want to delete? It cant be undone</p>
          </Modal>
          <LoadCard
            model={load.model}
            image={`${process.env.REACT_APP_ASSET_URL}/${load.image}`}
            payment={load.payment}
            price={load.price}
            companyName={load.companyName}
            phoneNumber={load.phoneNumber}
            pickupLocation={load.pickupLocation}
            dropOffLocation={load.dropOffLocation}
            pickupDate={load.pickupDate}
          />
          <div className="load-card__settings">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.userId === load.creator && (
              <Button to={`/loads/${loadId}/edit/`}>EDIT</Button>
            )}
            {auth.userId === load.creator && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Load;
