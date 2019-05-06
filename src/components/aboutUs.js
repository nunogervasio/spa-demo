import React from "react";
import Card from "./card";
import { Section } from "./section";
import { Container } from "./container";

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
    </Section>
  );
};

export default AboutUs;
