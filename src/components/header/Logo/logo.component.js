import React from "react";
import { Wrap, Image, InfoHold, Text } from "./logo.styles";
import LogoImg from "../../../img/logo.png";

const Logo = () => {
  return (
    <Wrap>
      <InfoHold>
        <Image src={LogoImg} />
        <Text>Sense</Text>
      </InfoHold>
    </Wrap>
  );
};

export default Logo;
