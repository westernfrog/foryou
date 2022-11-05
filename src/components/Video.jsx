import React from "react";

export default function Video() {
  return (
    <video controls width="100%">
      <source src="../../public/love.mp4" type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
}
