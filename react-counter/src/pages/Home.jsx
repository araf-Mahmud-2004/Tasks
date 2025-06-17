import Counter from "../components/Counter";
import { useState } from "react";
import styles from "./Home.module.css";

// Home component that uses the Counter component
function Home() {
  const [count, setCount] = useState(0); // State to hold the count value

  return (
    <div className={styles.homeContainer}>
      <Counter count={count} setCount={setCount} />
      <Counter count={count} setCount={setCount} />
    </div>
  );
}
export default Home;
