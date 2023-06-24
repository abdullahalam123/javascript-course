// A function inside another function that has access to the outer function's variables
// A closure is a function combined with its outer state
// A closure is stored in Heap memory
const outer = () => {
  let fruit = "Apple";

  const inner = () => {
    // the inner function is a closure
    console.log(fruit);
  };

  return inner;
};
// the inner function gets returned without even executing
const func = outer();
func();
