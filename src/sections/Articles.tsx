import React, { FC } from "react";
import { AboutShapes } from "../assets/svg";
import ArticleCard from "../components/ArticleCard";
import ArticleWrapper from "../components/ArticleWrapper";
import { Content } from "../components/Content";
import { images } from "../util/image";

interface Props {
  isMobile: boolean;
  articleRef: React.MutableRefObject<null>;
}

export const Articles: FC<Props> = ({ isMobile, articleRef }) => {
  return (
    <section id="articles" ref={articleRef}>
      <Content>
        {isMobile ? <></> : <AboutShapes />}
        <h1>Blogs  of interest</h1>
        <ArticleWrapper>
          <ArticleCard
            description={
              "Web front end development is one of the fields in IT that combines technical-analytic knowledge with creative skills."
            }
            title={"How to be creative in your web front end projects"}
            image={images.articles.blog2}
            tags={["Tutorial", "Tips"]}
            link={
              "https://www.startechup.com/es/blog/how-to-be-creative-in-your-web-front-end-projects/"
            }
          />
          <ArticleCard
            description={
              "Some of the highest-paid professionals in the world are front-end developers. They use their knowledge and talents to design appealing and user-friendly websites."
            }
            title={"What is front end?"}
            image={images.articles.blog3}
            tags={["Career", "Beginners"]}
            link={"https://www.freecodecamp.org/news/how-to-become-a-frontend-developer/"}
          />
          <ArticleCard
            description={
              "Design has always been primarily about systems and how to create products in a scalable and repeatable way. Visual language is like any other language."
            }
            title={"Ux/UI Blogs"}
            image={images.articles.blog4}
            tags={["Ux/Ui", "Design"]}
            link={"http://www.uxables.com/diseno-ux-ui/la-importancia-de-crear-un-sistema-de-diseno-en-ux/"}
          />
        </ArticleWrapper>
      </Content>
    </section>
  );
};
