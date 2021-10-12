import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addError,
  setCardData,
  setUserData,
} from "../../../redux/user/user.actions";
import { Wrap, DetailsWrap, ButtonsHolder, Slider } from "./card.styles";

import Calculator from "../calculator/calculator.component";
import Button from "../../../theme/ui-components/button/button.conponent";
import CardDetails from "./card-details/card-details.component";
import UserDetails from "./user-details/user-details.component";

import { checkValidatorn } from "../../../helpers";
import { createOrder } from "../../../redux/orders/orders.actions";

const Card = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.shop.cartItems);
  const [step, setStep] = useState(1);
  const [buttonValidaton, setButtonValidaton] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: user.userData.name,
    address: user.userData.address,
    email: user.userData.email,
  });
  const [cardDetails, setCardDetails] = useState({
    cardName: user.cardData.cardName,
    number: user.cardData.number,
    expDate: user.cardData.expDate,
    cvv: user.cardData.cvv,
  });

  useEffect(() => {
    setButtonValidaton(checkValidatorn(userDetails, cardDetails));
  }, [userDetails, cardDetails]);

  const handleDetailsButton = () => {
    setStep(step === 1 ? 2 : 1);
    dispatch(setUserData(userDetails));
    dispatch(setCardData(cardDetails));
  };

  const handlePlaceOrder = async () => {
    if (!buttonValidaton) {
      dispatch(addError("User and Card Details are required"));
      return;
    }
    if (cartItems.length === 0) {
      dispatch(addError("You have no items in your cart"));
      return;
    }
    dispatch(setUserData(userDetails));
    dispatch(setCardData(cardDetails));
    const orderdata = {
      items: [...cartItems],
      userData: { ...userDetails },
      _id: uuidv4(),
    };
    const respond = await dispatch(createOrder(orderdata));
    console.log(respond);
    if (respond.statusText === "OK") {
      history.push("/checkout/order");
    }
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
        <Button
          validate={buttonValidaton}
          color="green"
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      </ButtonsHolder>
    </Wrap>
  );
};

export default Card;
