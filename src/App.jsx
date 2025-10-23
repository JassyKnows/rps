import { useState } from 'react';
import './App.css';

function App() {
  const choices = ['rock', 'paper', 'scissors'];
  const [yourchoice, setYourchoice] = useState(null);
  const [compchoice, setCompchoice] = useState(null);
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    setYourchoice(choice);
    setCompchoice(choices[Math.floor(Math.random() * choices.length)]);
  };

  const winnerPick = () => {
    if (yourchoice === compchoice) {
      setResult("It's a tie");
    } else if (
      (yourchoice === 'rock' && compchoice === 'scissors') ||
      (yourchoice === 'paper' && compchoice === 'rock') ||
      (yourchoice === 'scissors' && compchoice === 'paper')
    ) {
      setResult('You won');
    } else {
      setResult('You lost');
    }
  };

  const resetButton = () => {
    setCompchoice(null);
    setYourchoice(null);
    setResult('');
  };

  return (
    <div>
      <button onClick={() => handleClick('rock')}>Rock</button>
      <button onClick={() => handleClick('paper')}>Paper</button>
      <button onClick={() => handleClick('scissors')}>Scissors</button>
      {yourchoice && <p>You picked {yourchoice}</p>}
      <button onClick={() => winnerPick()}>Play</button>
      <button onClick={() => resetButton()}>Reset</button>
      {result && (
        <p>
          {result} Computer picked {compchoice}
        </p>
      )}
    </div>
  );
}

export default App;
