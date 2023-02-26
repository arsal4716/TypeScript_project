var currentUsers = ["Arsalan", "Ali", "sami", "asad", "zain"];
var newUsers = ["bilal", "ahsan", "asad", "zain", "ahmed"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var isUserTaken = false;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log("The username ".concat(newUser, " is already taken. Please choose a different username."));
            isUserTaken = true;
            break;
        }
    }
    if (!isUserTaken) {
        console.log("The username ".concat(newUser, " is available."));
    }
}
