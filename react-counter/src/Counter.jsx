import "./Counter.css";

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
    <div className="counter-container">
      <h1>React Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button
          className="counter-btn decrement"
          onClick={decrement}
          aria-label="Decrease count"
        >
          -
        </button>
        <button
          className="counter-btn reset"
          onClick={reset}
          aria-label="Reset count"
        >
          Reset
        </button>
        <button
          className="counter-btn increment"
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
