// import React, { useState, useCallback } from "react";

import { useReducer, useState } from "react";

// var x = 0;

// function Children({ count = 0, handleIncrement = () => {} }) {
//   console.log("re-rendering");
//   return (
//     <div>
//       <h1>Children</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }

// export default function Parent() {
//   const [count, setCount] = useState(0);
//   const handleIncrementFn = useCallback(function handleIncrement(e) {
//     x += 1;
//     console.log("Previous", count, x);
//     setCount(count + 1);
//     console.log("Previous", count, x);
//   }, []);
//   console.log("Global", count);
//   return (
//     <div>
//       <h1>Parent ({count})</h1>
//       <p>
//         <Children count={0} handleIncrement={(e) => handleIncrementFn(e)} />
//       </p>
//     </div>
//   );
// }

// import React, { useState, useRef } from "react";

// // memoize
// function Children() {
//   const [count, setCount] = useState(0);
//   console.log("re-rendering");
//   return (
//     <div>
//       <h1 className="text-4xl">CHILDREN COUNTER</h1>
//       <h2 className="text-2xl">{count}</h2>
//       <button
//         onClick={() =>
//           setCount((prev) => {
//             return prev + 1;
//           })
//         }
//       >
//         Increment
//       </button>
//       <button
//         onClick={() =>
//           setCount((prev) => {
//             return prev - 1;
//           })
//         }
//       >
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default function Parent() {
//   const [count, setCount] = useState(0);
//   var ticks = 0;
//   var ticksTwo = useRef(0);

//   console.log("Ticks", ticks, ticksTwo);

//   return (
//     <div>
//       <h1 className="text-4xl">PARENT COUNTER</h1>
//       <h2 className="text-2xl">{ticksTwo.current}</h2>
//       <button
//         onClick={() => {
//           // setCount((prev) => {
//           //   return prev + 1;
//           // });
//           ticks += 1;
//           ticksTwo.current += 1;
//           console.log(ticks, ticksTwo);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() =>
//           setCount((prev) => {
//             return prev - 1;
//           })
//         }
//       >
//         Decrement
//       </button>

//       <div>
//         <Children />
//       </div>
//     </div>
//   );
// }

// useReducer
// function reducer(state, action) {
//   console.log(state, action);
//   if (action.type == "a") {
//     return { ...state, a: state.a + 1 };
//   } else if (action.type == "b") {
//     return { ...state, b: state.b + 1 };
//   } else if (action.type == "c") {
//     return { ...state, c: state.c + 1 };
//   } else if (action.type == "d") {
//     return { ...state, d: state.d + 1 };
//   } else if (action.type == "e") {
//     return { ...state, e: state.e + 1 };
//   } else {
//     return state;
//   }
// }

// export default function Parent() {
//   const [state, dispatcher] = useReducer(reducer, {
//     a: 0,
//     b: 0,
//     c: 0,
//     d: 0,
//     e: 0,
//   });

//   return (
//     <div>
//       <h1 className="text-4xl">PARENT COUNTER</h1>
//       <p onClick={() => dispatcher({ type: "a" })}>A = {state.a}</p>
//       <p onClick={() => dispatcher({ type: "b" })}>B = {state.b}</p>
//       <p onClick={() => dispatcher({ type: "c" })}>C = {state.c}</p>
//       <p onClick={() => dispatcher({ type: "d" })}>D = {state.d}</p>
//       <p onClick={() => dispatcher({ type: "e" })}>E = {state.e}</p>
//     </div>
//   );
// }

// import React from "react";

// export default function Parent() {
//   const [todos, setTodos] = useState([]);
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => setTodos(json));

//   return (
//     <div>
//       <ul>
//         {todos.map((e) => (
//           <li key={e.id}>{e.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
