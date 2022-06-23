import { React, useEffect, useState } from 'react';
import { format } from 'date-fns';
import './Timer.css';

export default function Timer({ elementTaskId, elementTaskTime, updateTimer }) {
  const [time, setTime] = useState(elementTaskTime);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const sec = 1000;
    let interval;
    if (running) {
      interval = setInterval(() => {
        updateTimer(elementTaskId, time - sec);
        setTime((prevTime) => prevTime - sec);
      }, sec);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, running]);

  const hundleStart = () => {
    setRunning(true);
  };

  const hundlePause = () => {
    setRunning(false);
  };

  // Format date
  function dateFormat(date) {
    if (date <= 0 && running) {
      hundlePause();
    }
    try {
      const result = new Date(date);

      return format(result, 'mm:ss');
    } catch {
      return date;
    }
  }
  return (
    <span className="description timer">
      <button onClick={hundleStart} className="icon icon-play"></button>
      <button onClick={hundlePause} className="icon icon-pause"></button>
      <span>{dateFormat(time)} </span>
    </span>
  );
}
