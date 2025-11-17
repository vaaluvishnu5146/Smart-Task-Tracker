// function computeAndSync(data = [], syncCB = () => {}) {
//   const sum = data.reduce((a, b) => a + b);
//   syncCB();
//   return sum;
// }

// function sync() {
//   console.log("Data Synched");
// }

// const input = [1, 2, 3, 4, 5];

// computeAndSync(input, sync); // ==> 1x123

const memoize = {};

function add(a, b) {
  return a + b;
}

function computeOrReturnFromCache(a, b) {
  if (memoize[[a, b].toString()]) {
    console.log("Fetched from cache");
  } else {
    const result = add(a, b);
    console.log("Computed Firt time", result);
    memoize[[a, b].toString()] = result;
  }
}

computeOrReturnFromCache(1, 2);
computeOrReturnFromCache(1, 2);
computeOrReturnFromCache(1, 2);
computeOrReturnFromCache(1, 2);

console.log(memoize);
