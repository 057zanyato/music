import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/far-away-angel-site/visits')
      .then(res => res.json())
      .then(data => setCount(data.value));
  }, []);
  return (
    <div className="visit-counter">
      <span className="visit-number">{count}</span>
      <span className="visit-text">visits</span>
    </div>
  );
}