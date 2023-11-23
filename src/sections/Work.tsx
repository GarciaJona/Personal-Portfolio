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
              "Karku is an online platform that combines the presentation of ecological products with an online shopping system. The project consists of two main parts: A presentation landing page and an eCommerce with advanced features. Karku eCommerce allows users to explore and purchase sustainable products online."
            }
            primaryColor={"#e25a00"}
            title={"Karku"}
            tags={["React", "Css", "Nodejs", "MongoDB"]}
            viewport={viewport}
            live={"https://www.karku.com.ar"}
            thumbnail={images.karku[0]}
            images={images.karku}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "Cognity, the groundbreaking health application, is showcased through an engaging landing page, impressively implemented in WordPress with the creative use of CSS and HTML. Users are welcomed to explore a wide range of health plans, subscribing to receive personalized recommendations and valuable insights to improve their well-being. With preventive disease plans and direct access to medical experts, Cognity offers a unique and dynamic approach to individualized health management. The seamless integration of WordPress, CSS, and HTML empowers users to navigate through the platform effortlessly, ensuring a delightful and informative user experience. Cognity sets a new standard in health applications, blending technology with human touch to promote a healthier and more informed lifestyle for its users."
            }
            primaryColor={"#e25a00"}
            title={"Cognity"}
            tags={["Ux", "Ui", "Wordpress"]}
            viewport={viewport}
            live={"https://cognity.bio"}
            thumbnail={images.cognity[0]}
            images={images.cognity}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "The landing page is a campaign project designed to showcase an exclusive promotion of the MDCX token. Developed in WordPress with CSS and HTML, the page provides a simple yet impactful interface to communicate the token's unique proposition and the benefits of participating in the promotion. Through an attractive design and concise content, the landing page aims to capture the attention of potential investors and users interested in the MDCX ecosystem, highlighting its innovative focus on the health sector and its value backed by data.."
            }
            primaryColor={"#e25a00"}
            title={"MDCxR Campaign"}
            tags={["Ux", "Ui", "Wordpress"]}
            viewport={viewport}
            live={"https://mdcx.finance/campaign-1000x1000"}
            thumbnail={images.mdcxcampaign[0]}
            images={images.mdcxcampaign}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "MDCX is an innovative cryptocurrency ecosystem known as the first health token. It introduces a novel approach by leveraging health-related data as a valuable asset, attributing value to the coin based on the data's relevance and utility. The project encourages data sharing and incentivizes contributions of health data from various sources within a secure and private environment. As the ecosystem grows and data quality improves, the MDCX token gains increased utility and value. The project envisions expanding its applications beyond health data through collaborations with healthcare providers, research institutions, and technology partners. Developed in WordPress with HTML, JavaScript, and CSS, MDCX represents a visionary initiative that aims to bridge the gap between technology and healthcare, fostering advancements in the pursuit of better global health."
            }
            primaryColor={"#e25a00"}
            title={"MDCxR"}
            tags={["Ux", "Ui", "Wordpress"]}
            viewport={viewport}
            live={"https://medbot.clinic"}
            thumbnail={images.mdcx[0]}
            images={images.mdcx}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "The clinical simulator is a revolutionary tool specifically designed to provide doctors with the opportunity to test and enhance their knowledge in a virtual environment. This interactive bot offers a wide range of clinical cases in which doctors can immerse themselves and face complex and realistic medical situations. This paper explores the significance and versatility of clinical simulators in medical education and highlights the implementation of WordPress, HTML, and CSS for designing an effective simulation platform."
            }
            primaryColor={"#e25a00"}
            title={"Medbot Clinic"}
            tags={["Ux", "Ui", "Wordpress"]}
            viewport={viewport}
            live={"https://medbot.clinic"}
            thumbnail={images.medbot[0]}
            images={images.medbot}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
          <WorkCard
            description={
              "NABIJASH offers a tool for companies and students to connect securely and create professional relationships with great opportunities for growth, learning and much more. NABIJASH is a full-stack application built using React.js, CSS, Node.js, Express.js, PostgreSQL and MongoDB."
            }
            primaryColor={"#e25a00"}
            title={"NABIJASH"}
            tags={["CSS", "Typescript"]}
            viewport={viewport}
            github={"https://github.com/GarciaJona/PF-HENRY-CLIENT"}
            live={"https://nabijash.vercel.app"}
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
            live={"https://www.trilhalele.com"}
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
            preview={"https://www.ilmirtilotienda.com.ar"}
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
            tags={["React", "Redux", "Express"]}
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
            live={"https://garciajona.github.io"}
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
