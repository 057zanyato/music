import React from "react";
import Counter from "./Counter";
import TrackPlayer from "./TrackPlayer";
import "./styles.css";

function App() {
  return (
    <div className="app-bg">
      <div className="grain-overlay"></div>
      <main className="main-container">
        <h1 className="minimal-title">far away</h1>
        <Counter />
        <div className="divider"></div>
        <TrackPlayer />
        <div className="divider"></div>
        <RevealBlock />
        <div className="author-note">by 057zanyato</div>
        <div className="moon-detail"></div>
      </main>
    </div>
  );
}

function RevealBlock() {
  return (
    <section className="reveal-block">
      <div className="reveal-title"><strong>Привет</strong>
      </div>
      <div className="reveal-text">
        <p>
          Меня зовут Марк, мой сценический псевдоним — <strong>057zanyato</strong>. Мне 23 года, я родом из прекрасного города Харьков, но судьба занесла меня в Киев из-за войны. Музыкой занимаюсь давно — это моя страсть, мой способ говорить с миром.
        </p>
        <p>
          Этот сайт — мой способ громко заявить о себе. Ты видишь его благодаря QR-коду, который я оставил где-то в городе. Теперь ты знаешь, кто я. Добро пожаловать в мой мир.
        </p>
        <div className="reveal-signature">— 057zanyato</div>
      </div>
    </section>
  );
}

export default App;