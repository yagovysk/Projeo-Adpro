import background from "../../assets/background-about.mp4";
import "./About.css";

export function About() {
  return (
    <section className="section-about">
      <video
        className="background-about"
        src={background}
        autoPlay
        loop
        muted
      />
      <div className="about-content">
        <h2>Por que nos contratar?</h2>
        <article className="article-about">
          <h3>Subtitulo</h3>
          <ul className="about-list">
            <li>motivo 1</li>
            <li>motivo 2</li>
            <li>motivo 3</li>
            <li>motivo 4</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
