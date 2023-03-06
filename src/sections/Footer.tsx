import React, { FC } from "react";
import { JGLogoStroke } from "../assets/svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Content } from "../components/Content";

export const Footer: FC = () => {
  return (
    <footer id="footer">
      <Content>
        <div className="logo-wrapper">
          <div className="jg-logo" title="Back to top">
            <AnchorLink offset="0" href="#main">
              <JGLogoStroke />
              <span className="hidden-text">Home</span>
            </AnchorLink>
          </div>
        </div>
      </Content>
    </footer>
  );
};
