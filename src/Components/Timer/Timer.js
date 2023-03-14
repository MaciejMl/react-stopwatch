import styles from './Timer.module.scss';

const Timer = ({ miliseconds }) => {
  const ms = miliseconds;
  const ss = Math.floor((ms / 1000) % 60);
  const mm = Math.floor((ms / 1000 / 60) % 60);
  const hh = Math.floor((ms / 1000 / 60 / 60) % 24);

  function formatedTime(num, targetLength) {
    return num.toString().padStart(targetLength, '0');
  }

  return (
    <div className={styles.time}>
      {formatedTime(hh, 2)} : {formatedTime(mm, 2)} : {formatedTime(ss, 2)} .{' '}
      {ms % 1000}
    </div>
  );
};
export default Timer;
