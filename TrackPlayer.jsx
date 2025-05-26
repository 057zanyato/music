import React from "react";

export default function TrackPlayer() {
  return (
    <section className="players">
      <iframe
        className="player-frame"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2086991328&color=%23222222&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="SoundCloud Player"
        style={{ marginBottom: 24, borderRadius: 12, background: "#181818" }}
      ></iframe>
      <iframe
        className="player-frame"
        style={{ borderRadius: 12, background: "#181818" }}
        src="https://open.spotify.com/embed/track/1mZEQi0MuiXJlJZWEqfKmZ?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </section>
  );
}