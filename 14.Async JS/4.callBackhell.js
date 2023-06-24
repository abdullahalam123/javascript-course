// we get a pyramid like structure
// where the top function gives an argument to the other function and so on

// for eg: we have a social media where we fetch username then the photos and then the photo details

// username
const fetchUsername = (username, callback) => {
  console.log("Fetching username...");
  setTimeout(() => {
    callback({ username });
  }, 2000);
};

// user photos
const fetchUserPhotos = (username, callback) => {
  console.log("Fetching photos...");
  setTimeout(() => {
    callback(["photo1", "photo2", "photo3"]);
  }, 2000);
};

// user photo details
const fetchUserPhotosDetails = (photo, callback) => {
  console.log("Fetching photo details...");
  setTimeout(() => {
    callback(["Detail1", "Detail2", "Detail3"]);
  }, 2000);
};

fetchUsername("Abdullah", (user) => {
  console.log(`The user's name is: ${user.username}`);
  // fetch the photos
  fetchUserPhotos(user.username, (photos) => {
    console.log(`${user.username} photos are: ${photos}`);
    // fetch the photo details
    fetchUserPhotosDetails(photos, (details) => {
      console.log(`The detials are: ${details}`);
    });
  });
});
