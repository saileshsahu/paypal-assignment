import React from "react";
import Image from "../Image";
import {
  Card,
  Category,
  ImageLayout,
  Title,
  Desc,
  Price,
  Content,
} from "./style";
import { capitalizeLetters, trimText } from "../../utils/common.util";
import { Currency } from "../../constants/constant";

const Item = (props) => {
  const data = props.data;
  return (
    <Card
      direction={props.direction}
      isCenter={props.isCenter}
      onAnimationEnd={props.resetDirection}
    >
      <ImageLayout>
        <Category>{capitalizeLetters(data.category)}</Category>
        <Image src={data.image} />
      </ImageLayout>
      <Content>
        <Title>{data.title}</Title>
        <Desc>{trimText(data.description)}</Desc>
        <Price>{`${Currency.USD}${data.price}`}</Price>
      </Content>
    </Card>
  );
};

export default Item;
