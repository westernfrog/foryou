import React from "react";
import Video from "./Video";

export default function Love() {
  return (
    <div>
      <canvas className="orb-canvas"></canvas>

      <div className="overlay">
        <div className="overlay__inner">
          <h1 className="overlay__title">
            Hey <span className="text-gradient"> girlfriend </span>... I have
            made something for you babay!
          </h1>

          <p className="overlay__description">
            You are very special to me babay I just like making you feel special
            and all. I tried to show our journey from the very starting to
            today! <br />
            <Video />
          </p>
        </div>
      </div>
    </div>
  );
}
