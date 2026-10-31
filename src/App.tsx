import { useState } from 'react';

export default function App() {
  const [location, setLocation] = useState('Убежище');
  const [energy, setEnergy] = useState(75);
  const [water, setWater] = useState(40);
  const [day, setDay] = useState(1);
  const [message, setMessage] = useState('Мир давно перестал быть прежним.');

  const explore = () => {
    if (energy < 10) {
      setMessage('Недостаточно энергии для исследования.');
      return;
    }

    setEnergy(energy - 10);
    setDay(day + 1);
    setLocation('Заброшенный район');
    setMessage('Ты покинул убежище. Впереди неизвестность.');
  };

  const returnHome = () => {
    setLocation('Убежище');
    setMessage('Ты вернулся в убежище.');
  };

  return (
    <main className="game">
      <header>
        <div className="logo">ПОСЛЕ ТЕБЯ</div>
        <div className="day">ДЕНЬ {day}</div>
      </header>

      <section className="intro">
        <div className="eyebrow">МИР ПОСЛЕ КОНЦА</div>
        <h1>{location}</h1>
        <p>{message}</p>
      </section>

      <section className="resources">
        <div className="resource">
          <span>⚡ Энергия</span>
          <strong>{energy}</strong>
        </div>
        <div className="resource">
          <span>💧 Вода</span>
          <strong>{water}</strong>
        </div>
      </section>

      <section className="story">
        <div className="eyebrow">ТВОЯ ИСТОРИЯ</div>
        <h2>Никого не осталось?</h2>
        <p>
          За пределами убежища лежит огромный мир.
          Каждый день может изменить твою судьбу.
        </p>
      </section>

      <section className="actions">
        <button onClick={explore}>Исследовать мир</button>
        <button className="secondary" onClick={returnHome}>
          Вернуться в убежище
        </button>
      </section>

      <footer>ОДИН МИР · МНОГО ИСТОРИЙ</footer>
    </main>
  );
}