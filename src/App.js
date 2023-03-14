import Button from './Components/Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import Timer from './Components/Timer/Timer';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [timeOn, setTimeOn] = useState(false);

  const startT = () => {
    setTimeOn(true);
  };

  const stopT = () => {
    setTimeOn(false);
  };

  const resetT = () => {
    setTime(0);
  };

  useEffect(() => {
    if (timeOn) {
      setTimer(
        setInterval(() => {
          setTime((prevValue) => prevValue + 1);
        }, 10)
      );
    } else {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeOn]);

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
