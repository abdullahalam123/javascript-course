const guestList = "Our guests are: emma, jacob, isabella, ethan";

const length = guestList.length;
console.log(length);

const upperCaseList = guestList.toUpperCase();
console.log(upperCaseList);

const isEthan = upperCaseList.includes("ETHAN");
console.log(isEthan);

const substringGuests = upperCaseList.slice(16);
console.log(substringGuests);

const guests = substringGuests.split(", ");
console.log(guests);


