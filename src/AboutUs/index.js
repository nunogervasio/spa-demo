import React from "react";
import styled from "styled-components";
import Card from "./card";
import { Section } from "./section";
import { Container } from "./container";

// const AboutUs = () => {
export default () => {
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

// export default AboutUs;
