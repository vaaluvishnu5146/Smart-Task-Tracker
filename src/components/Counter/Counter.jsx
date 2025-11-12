import { useState } from "react";

function Counter(props) {
  console.log(props);
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>
        {props.name} {count}
      </h1>
      <div>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}

export default Counter;
