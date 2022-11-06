import React, { useState } from "react";

export default function Love() {
  const [hearts, sethearts] = useState(1);
  function handleChange() {
    sethearts(hearts + 1);
  }
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
          </p>
          <div class="overlay__btns mt-2">
            <button class="overlay__btn overlay__btn--transparent">
              <a
                className="text-decoration-none text-black fs-6"
                href="https://youtube.com/shorts/USGZWKLkUQM?feature=share"
                target="_blank"
                rel="noreferrer"
              >
                Surprise!
              </a>
            </button>
            <button
              class="overlay__btn overlay__btn--colors"
              onClick={handleChange}
            >
              <span className="fs-6">
                Hearts ❤️
                <span className="text-gradient"> {hearts} </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
