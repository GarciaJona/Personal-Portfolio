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
          <h1>About</h1>
          <p>
            {" "}
            I am a proactive person in every way, my strongest objective is to grow in the field in which I develop,
            generate a good group and contribute my full knowledge to the company. Always eager to learn day by day and
            obtaining optimal results. I like to work as a team, I am interested that we all form part of the same goal
            and get to have the satisfaction of a challenge that has been overcome. I consider myself effective in each
            task to be carried out, decisive, practical and fast.
          </p>
        </Content>
      </section>
    </Element>
  );
}
