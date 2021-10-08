import React from "react";
import Box from "../../../../theme/ui-components/box/box.component";
import Functions from "./functions/functions.component";
import {
  Content,
  Images,
  Info,
  About,
  AfterInfo,
  Currency,
  PriceText,
  Price,
  EditName,
  HoldInfo,
} from "./expand-item.styles";
import { HoldImage, Image, Name } from "../item.styles";

import Gallery from "./gallery/gallery.component";

const ExpandItem = ({ item }) => {
  const { name, image, value, gallery } = item;
  const AfterAni = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  };
  return (
    <Box variant="expand" layoutId={name}>
      {image && (
        <HoldImage>
          <Image src={image} layoutId={`image ${name}`} />
        </HoldImage>
      )}
      <Images variants={AfterAni} initial="initial" animate="animate">
        <Gallery gallery={gallery} />
      </Images>
      <Content>
        <Info layoutId={`info ${name}`}>
          <Name layoutId={`name ${name}`}>
            <EditName>{name}</EditName>
          </Name>
          <AfterInfo variants={AfterAni} initial="initial" animate="animate">
            <HoldInfo>
              <Price>
                {value} <Currency>Kn</Currency>
                <PriceText>with shipping + handling</PriceText>
              </Price>
              <About>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                impedit in rerum ut veritatis autem dolores aliquid rem veniam
                nemo laborum quasi, commodi omnis illum aperiam! Consequatur
                fugiat sequi harum.
              </About>
            </HoldInfo>
            <Functions />
          </AfterInfo>
        </Info>
      </Content>
    </Box>
  );
};

export default ExpandItem;
