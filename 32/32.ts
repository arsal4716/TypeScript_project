let firstArray: string[] = ["Arsalan", "Ali", "sami", "asad","zain"];
let secarray: string[] = ["bilal", "ahsan", "asad", "zain", "ahmed"];

for (let newUser of secarray) {
  let isUserTaken = false;
  for (let currentUser of firstArray) {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      console.log(`The username ${newUser} is already taken. Please choose a different username.`);
      isUserTaken = true;
      break;
    }
  }
  if (!isUserTaken) {
    console.log(`The username ${newUser} is available.`);
  }
}
