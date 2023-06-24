// async returns a promise
// await waits for the promise to return a value
const fetchNumber = async () => {
  return 25;
};

const getResult = async () => {
  let result = await fetchNumber();
  console.log(result);
};

console.log(getResult());
