import React from "react";

import { CardType, CardImage, Inputs } from "./card-details.styles";
import { DetailsHolder, Text } from "../card.styles";

import CardImg1 from "../../../../img/cards/card1.png";
import CardImg2 from "../../../../img/cards/card2.png";
import CardImg3 from "../../../../img/cards/card3.png";
import CardImg4 from "../../../../img/cards/card4.png";

import Input from "../../../../theme/ui-components/input/input.component";

const CardDetails = ({ cardDetails, setCardDetails }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };
  return (
    <DetailsHolder>
      <Text>Card Details</Text>
      <CardType>
        <CardImage src={CardImg1} />
        <CardImage src={CardImg2} />
        <CardImage src={CardImg3} />
        <CardImage src={CardImg4} />
      </CardType>
      <Input name="name" label="Name on Card" onChange={handleChange} />
      <Input name="cardNumber" label="Card Number" onChange={handleChange} />
      <Inputs>
        <Input
          name="expDate"
          label="Expiration Date"
          placeholder="MM/YY"
          onChange={handleChange}
        />
        <Input name="cvv" label="CVV" onChange={handleChange} />
      </Inputs>
    </DetailsHolder>
  );
};

export default CardDetails;
