import styles from './Timer.module.scss';

const Timer = ({ miliseconds }) => {
  const ms = miliseconds;
  const ss = Math.floor((ms / 1000) % 60);
  const mm = Math.floor((ms / 1000 / 60) % 60);
  const hh = Math.floor((ms / 1000 / 60 / 60) % 24);

  return (
    <div className={styles.time}>
      {('0' + hh).slice(-2)}:{('0' + mm).slice(-2)}:{('0' + ss).slice(-2)}.
      {('0' + ms).slice(-3)}
    </div>
  );
};
export default Timer;
