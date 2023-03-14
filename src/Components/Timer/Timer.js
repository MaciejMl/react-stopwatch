import styles from './Timer.module.scss';

const Timer = ({ miliseconds }) => {
  // let ms = miliseconds % 1000;
  // let ss = Math.floor((ms / 1000) % 60);
  // let mm = Math.floor((ms / 1000 / 60) % 60);
  // let hh = Math.floor((ms / 1000 / 60 / 60) % 24);

  const ms = Math.floor(miliseconds);
  const ss = Math.floor((miliseconds % 6000) / 100);
  const mm = Math.floor((miliseconds % 360000) / 6000);
  const hh = Math.floor(miliseconds / 360000);

  function formatedTime(num, targetLength) {
    return num.toString().padStart(targetLength, '0');
  }

  return (
    <div className={styles.time}>
      {formatedTime(hh, 2)} : {formatedTime(mm, 2)} : {formatedTime(ss, 2)} .{' '}
      {formatedTime(ms, 3)}
    </div>
  );
};
export default Timer;
