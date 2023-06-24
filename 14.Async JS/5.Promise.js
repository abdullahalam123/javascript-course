// Promises are nothing but the object that will either return the fetched data or return an error

// username
// const fetchUsername = (username, callback) => {
//     console.log("Fetching username...");
//     setTimeout(() => {
//       callback({ username });
//     }, 2000);
//   };

// to replicate using Promises
// Promises take a resolve and reject

const fetchUsername = new Promise((resolve, reject) => {
  console.log("Fetching username...");

  setTimeout(() => {
    // resolve({ username: "Abdullah" });
    reject("User not found");
  }, 2000);
});

fetchUsername
  .then((user) => console.log(user.username))
  .catch((err) => console.log(err));
