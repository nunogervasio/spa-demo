import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Paragraph } from "./paragraph";
import { Image } from "./image";
import { Container } from "./container";
import { Title } from "./title";

const CardContainer = styled(Container)`
  width: 260px;
`;

const Card = () => {
  return (
    <CardContainer>
      <Image src="https://via.placeholder.com/260" />
      <Title>Default Title</Title>
      <Paragraph>
        Because a Styled Component is the combination of the element and the
        rules that style it, we'd write Counter like this:
      </Paragraph>
      <Button>Normal</Button>
      {/* <Button primary>Normal Plus</Button> */}
    </CardContainer>
  );
};

export default Card;
