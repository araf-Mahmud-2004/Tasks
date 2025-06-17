import styles from "./Counter.module.css";

function Counter({ count, setCount }) {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className={styles.counterContainer}>
      <h1>React Counter App</h1>
      <div className={styles.counterDisplay}>{count}</div>
      <div className={styles.counterButtons}>
        <button
          className={`${styles.counterBtn} ${styles.decrement}`}
          onClick={decrement}
          aria-label="Decrease count"
        >
          -
        </button>
        <button
          className={`${styles.counterBtn} ${styles.reset}`}
          onClick={reset}
          aria-label="Reset count"
        >
          Reset
        </button>
        <button
          className={`${styles.counterBtn} ${styles.increment}`}
          onClick={increment}
          aria-label="Increase count"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
