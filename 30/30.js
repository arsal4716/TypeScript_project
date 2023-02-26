var usernames = ["Arsalan", "ali", "admin", "sami", "asad"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin would you like to see status report?");
    }
    else {
        console.log("Hello " + username + "Thank you for logging again ");
    }
}
