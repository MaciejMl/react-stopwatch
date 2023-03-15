import Button from './Components/Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import Timer from './Components/Timer/Timer';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startT = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((prevValue) => prevValue + 1);
        }, 1)
      );
    }
  };

  const stopT = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const resetT = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className='timer'>
      <Timer miliseconds={time} />
      <Button title='start' action={startT} />
      <Button title='stop' action={stopT} />
      <Button title='reset' action={resetT} />
    </div>
  );
};

export default App;
