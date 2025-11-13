import React from "react";

function Grid(props = {}) {
  return <div className="bg-blue-300 h-[250px]">{props.title}</div>;
}

export default function EcommerceGrid() {
  //   const count = 10;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const odds = numbers.filter((el) => el % 2 != 0);
  const evens = numbers.filter((el) => el % 2 == 0);

  console.log(odds, evens);

  //   function sum(arr = []) {
  //     let res = 0;

  //     arr.forEach((e) => {
  //       res += e;
  //     });

  //     return res;
  //   }

  function sum(arr = []) {
    return arr.reduce((prev, curr) => {
      console.log(prev, curr);
      return prev + curr;
    });
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-3 mb-3">
        {odds.map((el, index) => (
          <Grid title={el} key={index} />
        ))}
        <h2>Total: {sum(odds)}</h2>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {evens.map((el, index) => (
          <Grid title={el} key={index} />
        ))}
        <h2>Total: {sum(evens)}</h2>
      </div>
    </div>
  );
}
