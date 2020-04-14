import React from 'react';
import './App.css';

import Timer from './components/timer/Timer';

function App() {
  const onTimeEnd = () => console.log('Time is up!');
  const onTick = (time) => console.log(`Time remaining: ${time}`);
  const onTimePause = () => console.log('Timer is paused!');

  return (
    <div className="App">
      <h1>Dummy Timer</h1>
      <Timer 
        time={20} 
        auto={true} 
        step={1} //1s
        onTimeEnd={onTimeEnd}
        onTick={onTick}
        onTimePause={onTimePause}
      />

      <Timer 
        time={50} 
        auto={false} 
        step={5}
        onTimeEnd={onTimeEnd}
        onTick={onTick}
        onTimePause={onTimePause}
      />
    </div>
  );
}

export default App;
