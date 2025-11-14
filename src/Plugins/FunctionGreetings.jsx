import { useState, useLayoutEffect, useEffect } from "react";

// Functional Programming
function FunctionGreetings() {
  // State declaration
  const [message] = useState("Hello World");
  const [title, setTitle] = useState("Test Title");
  const [count, setCount] = useState(0);

  // Component Will Mount and Component Will Update
  useLayoutEffect(() => {
    console.log("Layout Effect");
  }, [count]); // Dependencies

  // Component Did Mount and Component Did Update
  useEffect(() => {
    console.log("Effect");
  }, [count]); // Dependencies

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setCount(count + 1)}>Count :{count}</button>
    </div>
  );
}

export default FunctionGreetings;
