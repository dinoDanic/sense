import React from "react";
import Input from "../../../../theme/ui-components/input/input.component";
import { DetailsHolder } from "../card.styles";
import { UserHold, Text } from "./user-details.styles";

const UserDetails = ({ setUserDetails, userDetails }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  return (
    <DetailsHolder>
      <UserHold>
        <Text>User Details</Text>
        <Input
          name="name"
          value={userDetails.name}
          label="Full Name"
          placeholder="Jorge Step"
          onChange={handleChange}
        />
        <Input
          value={userDetails.address}
          name="address"
          label="Address"
          placeholder="Somewhere far away 2a"
          onChange={handleChange}
        />
        <Input
          value={userDetails.email}
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
        />
      </UserHold>
    </DetailsHolder>
  );
};

export default UserDetails;
