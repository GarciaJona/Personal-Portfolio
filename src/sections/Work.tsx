import React, { FC } from "react";
import { AboutShapes } from "../assets/svg";
import { Content } from "../components/Content";
import WorkCard from "../components/WorkCard";
import WorkWrapper from "../components/WorkWrapper";
import { ModalDetails } from "../util";
import { images, Image } from "../util/image";

interface Props {
  isMobile: boolean;
  viewport: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalDetails | undefined>>;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Image[]>>;
  workRef: React.MutableRefObject<null>;
}

export const Work: FC<Props> = ({
  isMobile,
  viewport,
  setIsModalOpen,
  setModalInfo,
  setIsImageModalOpen,
  setImageModalList,
  workRef,
}) => {
  return (
    <section id="work" ref={workRef}>
      <Content>
        {isMobile ? <></> : <AboutShapes />}
        <h1>Work</h1>
        <WorkWrapper>
          <WorkCard
            description={
              "NABIJASH offers a tool for companies and students to connect securely and create professional relationships with great opportunities for growth, learning and much more. NABIJASH is a full-stack application built using React.js, CSS, Node.js, Express.js, PostgreSQL and MongoDB."
            }
            primaryColor={"#e25a00"}
            title={"NABIJASH"}
            tags={["CSS", "Typescript"]}
            viewport={viewport}
            github={"https://github.com/GarciaJona/PF-HENRY-CLIENT"}
            preview={"https://nabijash.vercel.app/"}
            thumbnail={images.nabijash[0]}
            images={images.nabijash}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "Trilha lele is an e-commerce platform where you can find a wide variety of aromas and artisan products. It is a brand dedicated to decorating your home. Developed in TiendaNube using own plugins and css styling."
            }
            title={"Trilha Lele"}
            primaryColor={"#e25a00"}
            tags={["Front-End", "TiendaNube"]}
            live={"https://www.trilhalele.com/"}
            viewport={viewport}
            thumbnail={images.trilha[0]}
            images={images.trilha}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "Il Mirtilo is a family business, dedicated to the production, preparation and sale of gourmet quality products derived from red fruits harvested in our own plantations located in the town of Suipacha (Buenos Aires Province). This e-commerce site was built using styling CSS and Tienda Nube´s plugins."
            }
            title={"Il Mirtilo"}
            primaryColor={"#e25a00"}
            tags={["Front-End", "TiendaNube"]}
            preview={"https://www.ilmirtilotienda.com.ar/"}
            viewport={viewport}
            thumbnail={images.ilmirtilo[0]}
            images={images.ilmirtilo}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "The first final project of the Soy Henry Bootcamp is based on creating a Dogs SPA using an external API. Bringing that data we must do: style, paginate, filter and search. In my case, I used: HTML5, CSS3, JavaScript, React, Redux, Express, PostgreSQL and Node.js."
            }
            title={"Dogs API"}
            primaryColor={"#e25a00"}
            tags={["React","Redux", "Express"]}
            github={"https://github.com/GarciaJona/Pi-Dogs-Henry"}
            viewport={viewport}
            thumbnail={images.dogsapi[0]}
            images={images.dogsapi}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "This is my first portfolio created after finishing my studies at the Coderhouse bootcamp. This SPA is developed based on HTML, CSS and JavaScript."
            }
            title={"My First Portfolio"}
            primaryColor={"#e25a00"}
            tags={["HTML", "CSS", "JavaScript"]}
            github={"https://github.com/GarciaJona/GarciaJona.github.io"}
            preview={"https://garciajona.github.io/"}
            viewport={viewport}
            thumbnail={images.portfolio[0]}
            images={images.portfolio}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
        </WorkWrapper>
      </Content>
    </section>
  );
};
