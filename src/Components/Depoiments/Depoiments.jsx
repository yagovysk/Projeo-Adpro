import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import foto1 from "../../assets/depoiments-1.png";
import { FaGoogle } from "react-icons/fa";
import "./Depoiments.css";

export function Depoiments() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const depoiments = [
    {
      stars: "★★★★★",
      text: "texto do depoimento",
      img: foto1,
      name: "Nome do cliente",
    },
    {
      stars: "★★★★★",
      text: "texto do depoimento",
      img: foto1,
      name: "Nome do cliente",
    },
    {
      stars: "★★★★★",
      text: "texto do depoimento",
      img: foto1,
      name: "Nome do cliente",
    },
  ];

  return (
    <section id="depoiments" className="section-depoiments">
      <h2>Avaliações</h2>
      {isMobile ? (
        <Carousel
          className="about-carousel"
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
        >
          {depoiments.map((depoiment, index) => (
            <div key={index} className="card-depoiment">
              <h3>{depoiment.stars}</h3>
              <p>{depoiment.text}</p>
              <div className="about-perfil">
                <img src={depoiment.img} alt={depoiment.name} />
                <h4>{depoiment.name}</h4>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="depoiments-cards">
          {depoiments.map((depoiment, index) => (
            <div key={index} className="card-depoiment">
              <h3>{depoiment.stars}</h3>
              <p>{depoiment.text}</p>
              <div className="about-perfil">
                <img src={depoiment.img} alt={depoiment.name} />
                <h4>{depoiment.name}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
      <a
        className="avaliation"
        href="https://www.google.com/search?q=nutri+e+leve&sca_esv=7b18b02be1ed2b18&rlz=1C1CHBD_pt-PTBR1101BR1101&ei=aASYZsX1K8Sc1sQPyuSTmAg&ved=0ahUKEwjFyZvK0a6HAxVEjpUCHUryBIMQ4dUDCA8&uact=5&oq=nutri+e+leve&gs_lp=Egxnd3Mtd2l6LXNlcnAiDG51dHJpIGUgbGV2ZTIOEC4YgAQYxwEYjgUYrwEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgIQJjIIEAAYgAQYogQyHRAuGIAEGMcBGI4FGK8BGJcFGNwEGN4EGOAE2AEBSNItULESWJoscAV4AJABAJgBzwGgAdsQqgEGMC4xMS4yuAEDyAEA-AEBmAISoAKREcICCxAAGIAEGLADGKIEwgIKEAAYgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAgUQABiABMICCxAuGIAEGNEDGMcBwgIIEAAYgAQYsQPCAgUQLhiABMICDhAAGIAEGLEDGIMBGIoFwgIOEC4YgAQYsQMY0QMYxwHCAiAQLhiABBixAxjRAxiDARjHARiXBRjcBBjeBBjgBNgBAcICEBAAGIAEGLEDGEMYyQMYigXCAggQABiABBiSA8ICDRAAGIAEGLEDGEMYigXCAhAQABiABBixAxhDGIMBGIoFwgILEC4YgAQYxwEYrwHCAggQABgWGAoYHsICChAAGBYYChgeGA-YAwCIBgGQBgG6BgYIARABGBSSBwY1LjExLjKgB_5s&sclient=gws-wiz-serp"
        target="blank"
      >
        <FaGoogle /> Avalie a gente e ganhe um muffin!
      </a>
    </section>
  );
}
