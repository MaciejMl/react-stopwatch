import styles from './Button.module.scss';

const Button = ({ title, action }) => {
  return (
    <button className={styles.button} onClick={action}>
      {title}
    </button>
  );
};

export default Button;
