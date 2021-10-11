import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrap,
  DetailsHolder,
  DetailsWrap,
  Next,
  Prev,
  ButtonsHolder,
  ArrowNext,
  ArrowPrev,
  Slider,
} from "./card.styles";
import ArrrowImg from "../../../img/arrow.svg";

import Calculator from "../calculator/calculator.component";
import Button from "../../../theme/ui-components/button/button.conponent";
import CardDetails from "./card-details/card-details.component";
import UserDetails from "./user-details/user-details.component";

const Card = () => {
  const [step, setStep] = useState(1);
  const [buttonValidaton, setButtonValidaton] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [cardDetails, setCardDetails] = useState({});
  const handleDetailsButton = () => {
    setStep(step === 1 ? 2 : 1);
  };
  return (
    <Wrap>
      <DetailsWrap>
        <Slider animate={{ x: step === 1 ? 0 : "-100%" }}>
          <UserDetails
            setUserDetails={setUserDetails}
            userDetails={userDetails}
          />
          <CardDetails
            setCardDetails={setCardDetails}
            cardDetails={cardDetails}
          />
        </Slider>
      </DetailsWrap>
      <Calculator />
      <ButtonsHolder>
        <Button color="green" onClick={handleDetailsButton}>
          {step === 1 ? "Card Details" : "User Details"}
        </Button>
        <Button validate={buttonValidaton} color="green">
          Place Order
        </Button>
      </ButtonsHolder>
    </Wrap>
  );
};

export default Card;
