import { useState } from 'react';

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Counter Below</h1>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 5)}>Increase by 5</button>
      <button onClick={() => setScore(score - 5)}>Decrease by 5</button>
      <br />
      <br />
      <br /><br /><br />
    </div>
  );
}

export default ScoreKeeper;
