import React from "react";
import { AboutShapes } from "../assets/svg";
import { Content } from "../components/Content";
import { Element } from "react-scroll";

interface Props {
  isMobile: boolean;
  aboutRef: React.MutableRefObject<null>;
}

export function About(props: Props) {
  const { isMobile, aboutRef } = props;

  return (
    <Element name="home">
      <section id="about" ref={aboutRef}>
        <Content>
          {isMobile ? null : <AboutShapes />}
          <h1>About Me</h1>
          <p>
            {" "}
            I am a proactive individual, eager to contribute my knowledge and skills to a company while also continuing to learn and grow within my field. I am a strong team player, striving to work towards common goals and overcome challenges together. My approach to tasks is practical, decisive and efficient, ensuring optimal results.
          </p>
        </Content>
      </section>
    </Element>
  );
}
