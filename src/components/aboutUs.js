import React from "react";
import styled from "styled-components";
import Card from "./card";
import { Section } from "./section";
import { Container } from "./container";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const AboutUs = () => {
  return (
    <Section>
      {/* <Wrapper> */}
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
      {/* </Wrapper> */}
    </Section>
  );
};

export default AboutUs;
