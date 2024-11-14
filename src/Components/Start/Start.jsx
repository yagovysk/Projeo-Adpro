import backgroundVideo from "../../assets/background-start.mp4";
import { useEffect, useRef } from "react";
import "./Start.css";

export function Start() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="start-section">
      <video
        ref={videoRef}
        className="video-background"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="content-overlay">
        <article className="article-start">
          <h1>Título inicial</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem est excepturi quos maiores provident quam, nulla
            animi libero et aspernatur, deleniti iusto id vero commodi, cum
            dolorum nam quisquam. Beatae.
          </p>
        </article>
        <a href="#" className="prospection-button">
          Botão para contato
        </a>
      </div>
    </section>
  );
}
