// username
const fetchUsername = (username) => {
  return new Promise((resolve, reject) => {
    console.log("Fetching user...");
    setTimeout(() => {
      resolve({ username });
    }, 2000);
  });
};

// user photos
const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching ${username} photos...`);
    setTimeout(() => {
      resolve(["p1", "p2", "p3"]);
    }, 2000);
  });
};

// user photo details
const fetchUserPhotosDetails = (photo) => {
  return new Promise((resolve, reject) => {
    console.log("Fetching photo details...");
    setTimeout(() => {
      resolve(["Detail1", "Detail2", "Detail3"]);
    }, 2000);
  });
};

fetchUsername("Abdullah")
  .then((user) => fetchUserPhotos(user.username))
  .then((photos) => fetchUserPhotosDetails(photos[0]))
  .then((details) => console.log(`The details of photos are ${details}`));
