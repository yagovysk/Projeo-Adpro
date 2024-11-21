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
        <h1>Por que nos contratar?</h1>
        <article>
          <h2>Subtitulo</h2>
          <ul>
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
