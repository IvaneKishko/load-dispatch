import React, { useState } from "react";
import { useParams } from "react-router-dom";

import UserCard from "../components/UserCard";
import USERSDATA from "../../usersData";

const User = (props) => {
  const userId = useParams().userId;
  const user = USERSDATA.find((user) => user.companyId === userId);
  console.log(user);

  return (
    <UserCard
      companyName={user.companyName}
      phone={user.phone}
      joinDate={user.joinDate}
      insurance={user.insurance}
      numberOfTrucks={user.numberOfTrucks}
      rating={user.rating}
      address={user.address}
      email={user.email}
      certified={user.certified}
    />
  );
};

export default User;
