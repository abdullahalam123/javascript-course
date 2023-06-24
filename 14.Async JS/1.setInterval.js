// setInterval() does something 'repeatedly' after certain interval

// console.log("first");
const printing = setInterval(() => {
  console.log("Hello world");
}, 1000);
// console.log("third");
// clearInterval() is used to stop our interval
clearInterval(printing);
