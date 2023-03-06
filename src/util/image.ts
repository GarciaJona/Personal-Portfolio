//Nabijash
import Nabijash1 from "../assets/images/nabijash/Screenshot_1.png";
import Nabijash2 from "../assets/images/nabijash/Screenshot_2.png";
import Nabijash3 from "../assets/images/nabijash/Screenshot_3.png";
import Nabijash4 from "../assets/images/nabijash/Screenshot_4.png";
import Nabijash5 from "../assets/images/nabijash/Screenshot_5.png";
import Nabijash6 from "../assets/images/nabijash/Screenshot_6.png";
import Nabijash7 from "../assets/images/nabijash/Screenshot_7.png";
import Nabijash1Thumb from "../assets/images/nabijash/Screenshot_1-thumb.png";
import Nabijash2Thumb from "../assets/images/nabijash/Screenshot_2-thumb.png";
import Nabijash3Thumb from "../assets/images/nabijash/Screenshot_3-thumb.png";
import Nabijash4Thumb from "../assets/images/nabijash/Screenshot_4-thumb.png";
import Nabijash5Thumb from "../assets/images/nabijash/Screenshot_5-thumb.png";
import Nabijash6Thumb from "../assets/images/nabijash/Screenshot_6-thumb.png";
import Nabijash7Thumb from "../assets/images/nabijash/Screenshot_7-thumb.png";
//Trihla
import Trilha1 from "../assets/images/trilha/Screenshot_1.png";
import Trilha2 from "../assets/images/trilha/Screenshot_2.png";
import Trilha3 from "../assets/images/trilha/Screenshot_3.png";
import Trilha4 from "../assets/images/trilha/Screenshot_4.png";
import Trilha5 from "../assets/images/trilha/Screenshot_5.png";
import Trilha6 from "../assets/images/trilha/Screenshot_6.png";
import Trilha1Thumb from "../assets/images/trilha/Screenshot_1-thumb.png";
import Trilha2Thumb from "../assets/images/trilha/Screenshot_2-thumb.png";
import Trilha3Thumb from "../assets/images/trilha/Screenshot_3-thumb.png";
import Trilha4Thumb from "../assets/images/trilha/Screenshot_4-thumb.png";
import Trilha5Thumb from "../assets/images/trilha/Screenshot_5-thumb.png";
import Trilha6Thumb from "../assets/images/trilha/Screenshot_6-thumb.png";

//Il Mirtilo
import IlMirtilo1 from "../assets/images/ilmirtilo/Screenshot_1.png";
import IlMirtilo2 from "../assets/images/ilmirtilo/Screenshot_2.png";
import IlMirtilo3 from "../assets/images/ilmirtilo/Screenshot_3.png";
import IlMirtilo4 from "../assets/images/ilmirtilo/Screenshot_4.png";
import IlMirtilo5 from "../assets/images/ilmirtilo/Screenshot_5.png";
import IlMirtilo6 from "../assets/images/ilmirtilo/Screenshot_6.png";
import IlMirtilo1Thumb from "../assets/images/ilmirtilo/Screenshot_1-thumb.png";
import IlMirtilo2Thumb from "../assets/images/ilmirtilo/Screenshot_2-thumb.png";
import IlMirtilo3Thumb from "../assets/images/ilmirtilo/Screenshot_3-thumb.png";
import IlMirtilo4Thumb from "../assets/images/ilmirtilo/Screenshot_4-thumb.png";
import IlMirtilo5Thumb from "../assets/images/ilmirtilo/Screenshot_5-thumb.png";
import IlMirtilo6Thumb from "../assets/images/ilmirtilo/Screenshot_6-thumb.png";

//Dogs API
import DogsApi1 from "../assets/images/dogsapi/Screenshot_1.png";
import DogsApi2 from "../assets/images/dogsapi/Screenshot_2.png";
import DogsApi3 from "../assets/images/dogsapi/Screenshot_3.png";
import DogsApi4 from "../assets/images/dogsapi/Screenshot_4.png";
import DogsApi5 from "../assets/images/dogsapi/Screenshot_5.png";
import DogsApi1Thumb from "../assets/images/dogsapi/Screenshot_1-thumb.png";
import DogsApi2Thumb from "../assets/images/dogsapi/Screenshot_2-thumb.png";
import DogsApi3Thumb from "../assets/images/dogsapi/Screenshot_3-thumb.png";
import DogsApi4Thumb from "../assets/images/dogsapi/Screenshot_4-thumb.png";
import DogsApi5Thumb from "../assets/images/dogsapi/Screenshot_5-thumb.png";

//Portfolio
import Portfolio1 from "../assets/images/portfolio/Screenshot_1.png";
import Portfolio2 from "../assets/images/portfolio/Screenshot_2.png";
import Portfolio3 from "../assets/images/portfolio/Screenshot_3.png";
import Portfolio4 from "../assets/images/portfolio/Screenshot_4.png";
import Portfolio5 from "../assets/images/portfolio/Screenshot_5.png";
import Portfolio1Thumb from "../assets/images/portfolio/Screenshot_1-thumb.png";
import Portfolio2Thumb from "../assets/images/portfolio/Screenshot_2-thumb.png";
import Portfolio3Thumb from "../assets/images/portfolio/Screenshot_3-thumb.png";
import Portfolio4Thumb from "../assets/images/portfolio/Screenshot_4-thumb.png";
import Portfolio5Thumb from "../assets/images/portfolio/Screenshot_5-thumb.png";

//Articles
import Blog2 from "../assets/images/articles/blog2.png"
import Blog3 from "../assets/images/articles/blog3.png"
import Blog4 from "../assets/images/articles/blog4.png"

export interface Image {
  width: number;
  height: number;
  thumb: string;
  src: string;
  alt: string;
}

export const images: {
  nabijash: Image[];
  trilha: Image[];
  ilmirtilo: Image[];
  dogsapi: Image[];
  portfolio: Image[];
  articles: {
    blog2: Image;
    blog3: Image;
    blog4: Image;
  };
} = {
  nabijash: [
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash1Thumb,
      src: Nabijash1,
      alt: "Nabijash Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash2Thumb,
      src: Nabijash2,
      alt: "Nabijash Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash3Thumb,
      src: Nabijash3,
      alt: "Nabijash Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash4Thumb,
      src: Nabijash4,
      alt: "Nabijash Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash5Thumb,
      src: Nabijash5,
      alt: "Nabijash Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash6Thumb,
      src: Nabijash6,
      alt: "Nabijash Screenshot #6",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash7Thumb,
      src: Nabijash7,
      alt: "Nabijash Screenshot #7",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Nabijash1Thumb,
      src: Nabijash1,
      alt: "Nabijash Screenshot #8",
    },
  ],
  trilha: [
    {
      width: 2559,
      height: 1326,
      thumb: Trilha1Thumb,
      src: Trilha1,
      alt: "Trilha Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Trilha2Thumb,
      src: Trilha2,
      alt: "Trilha Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Trilha3Thumb,
      src: Trilha3,
      alt: "Trilha Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Trilha4Thumb,
      src: Trilha4,
      alt: "Trilha Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Trilha5Thumb,
      src: Trilha5,
      alt: "Trilha Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: Trilha6Thumb,
      src: Trilha6,
      alt: "Trilha Screenshot #6",
    },
  ],
  ilmirtilo: [
    {
      width: 2559,
      height: 1326,
      thumb: IlMirtilo1Thumb,
      src: IlMirtilo1,
      alt: "IlMirtilo Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: IlMirtilo2Thumb,
      src: IlMirtilo2,
      alt: "IlMirtilo Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: IlMirtilo3Thumb,
      src: IlMirtilo3,
      alt: "IlMirtilo Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: IlMirtilo4Thumb,
      src: IlMirtilo4,
      alt: "IlMirtilo Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: IlMirtilo5Thumb,
      src: IlMirtilo5,
      alt: "IlMirtilo Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: IlMirtilo6Thumb,
      src: IlMirtilo6,
      alt: "IlMirtilo Screenshot #6",
    },
  ],
  dogsapi: [
    {
      width: 3360,
      height: 1878,
      thumb: DogsApi1Thumb,
      src: DogsApi1,
      alt: "DogsApi Screenshot #1",
    },
    {
      width: 3360,
      height: 1878,
      thumb: DogsApi2Thumb,
      src: DogsApi2,
      alt: "DogsApi Screenshot #2",
    },
    {
      width: 3360,
      height: 1878,
      thumb: DogsApi3Thumb,
      src: DogsApi3,
      alt: "DogsApi Screenshot #3",
    },
    {
      width: 3360,
      height: 1878,
      thumb: DogsApi4Thumb,
      src: DogsApi4,
      alt: "DogsApi Screenshot #4",
    },
    {
      width: 3360,
      height: 1878,
      thumb: DogsApi5Thumb,
      src: DogsApi5,
      alt: "DogsApi Screenshot #5",
    },
  ],
  portfolio: [
    {
      width: 3360,
      height: 1878,
      thumb: Portfolio1Thumb,
      src: Portfolio1,
      alt: "PortfolioScreenshot #1",
    },
    {
      width: 3360,
      height: 1878,
      thumb: Portfolio2Thumb,
      src: Portfolio2,
      alt: "PortfolioScreenshot #2",
    },
    {
      width: 3360,
      height: 1878,
      thumb: Portfolio3Thumb,
      src: Portfolio3,
      alt: "Portfolio Screenshot #3",
    },
    {
      width: 3360,
      height: 1878,
      thumb: Portfolio4Thumb,
      src: Portfolio4,
      alt: "Portfolio Screenshot #4",
    },
    {
      width: 3360,
      height: 1878,
      thumb: Portfolio5Thumb,
      src: Portfolio5,
      alt: "PortfolioScreenshot #5",
    },
  ],
  articles: {
    blog2: {
      width: 2559,
      height: 1326,
      thumb: Blog2,
      src: Blog2,
      alt: "blog",
    },
    blog3: {
      width: 2559,
      height: 1326,
      thumb: Blog3,
      src: Blog3,
      alt: "blog",
    },
    blog4: {
      width: 2559,
      height: 1326,
      thumb: Blog4,
      src: Blog4,
      alt: "blog",
    },
  },
};
