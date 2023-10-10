import React, { useState } from "react";
import { useParams } from "react-router-dom";

import LOADSDATA from "../../loadsData";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import "./Load.css";
import LoadCard from "../../shared/components/UIElements/LoadCard";

const Load = () => {
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
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false)
    console.log("deleting");
  };

  const loadId = useParams().loadId;
  const load = LOADSDATA.find((e) => e.id === loadId);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={load.pickupPlace}
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
            <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </React.Fragment>
        }
      >
        <p>Do you want to delete? It cant be undone</p>
      </Modal>
      <LoadCard
        model={load.model}
        image={load.image}
        payment={load.payment}
        price={load.price}
        companyName={load.companyName}
        phone={load.phone}
        pickupPlace={load.pickupPlace}
        dropOffPlace={load.dropOffPlace}
        pickupDate={load.pickupDate}
      />
      <div className="load-card__settings">
        <Button inverse onClick={openMapHandler}>
          VIEW ON MAP
        </Button>
        <Button to={`/loads/${loadId}/edit/`}>EDIT</Button>
        <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
      </div>
    </React.Fragment>
  );
};

export default Load;
