import React from "react";
import { Text, Wrap, CardType, CardImage, Inputs } from "./card.styles";
import CardImg1 from "../../../img/cards/card1.png";
import CardImg2 from "../../../img/cards/card2.png";
import CardImg3 from "../../../img/cards/card3.png";
import CardImg4 from "../../../img/cards/card4.png";
import Input from "../../../theme/ui-components/input/input.component";

const Card = () => {
  return (
    <Wrap>
      <Text>Card Details</Text>
      <CardType>
        <CardImage src={CardImg1} />
        <CardImage src={CardImg2} />
        <CardImage src={CardImg3} />
        <CardImage src={CardImg4} />
      </CardType>
      <Input label="Name on Card" />
      <Input label="Card Number" />
      <Inputs>
        <Input label="Expiration Date" placeholder="MM/YY" />
        <Input label="CVV" />
      </Inputs>
    </Wrap>
  );
};

export default Card;
