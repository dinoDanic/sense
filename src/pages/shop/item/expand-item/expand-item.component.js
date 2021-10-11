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
  Layer,
} from "./expand-item.styles";
import { HoldImage, Image, Name } from "../item.styles";

import Gallery from "./gallery/gallery.component";

const ExpandItem = ({ item, setExpand }) => {
  const { name, image, value, gallery, description } = item;
  const AfterAni = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.5 } },
    exit: { opacity: 0, y: -10 },
  };
  return (
    <>
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
            <AfterInfo
              variants={AfterAni}
              initial="initial"
              animate="animate"
              exit="exit"
              key="after"
            >
              <HoldInfo>
                <Price>
                  {value} <Currency>€</Currency>
                  <PriceText>with shipping + handling</PriceText>
                </Price>
                <About>{description}</About>
              </HoldInfo>
              <Functions item={item} />
            </AfterInfo>
          </Info>
        </Content>
      </Box>
      <Layer onClick={() => setExpand(false)} />
    </>
  );
};

export default ExpandItem;
