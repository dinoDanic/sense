import React from "react";
import { Link } from "react-router-dom";
import { Wrap, Image, InfoHold, Text } from "./logo.styles";
import LogoImg from "../../../img/logo.png";

const Logo = () => {
  return (
    <Wrap>
      <Link to="/">
        <InfoHold>
          <Image src={LogoImg} />
          <Text>Sense</Text>
        </InfoHold>
      </Link>
    </Wrap>
  );
};

export default Logo;
