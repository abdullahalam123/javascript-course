// callback means calling another function from inside our function

// Fetching data of user after a certain time
const fetch = (username, callback) => {
  console.log("Fetching data....");
  setTimeout(() => {
    console.log("Data fetched...");
    callback({ username });
  }, 2000);
};

fetch("Abdullah", (user) => {
  console.log(`Hello there  ${user.username}`);
});
