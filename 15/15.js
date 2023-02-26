var guestlist = ["Sami", "Zeshan", "Asad", "Ahmed"];
// Ahmed can't join our dinner so remove this
var rglist = guestlist.indexOf("Ahmed");
guestlist.splice(rglist, 2);
// Add new guest in our list
guestlist.push("Zain");
for (var k = 0; k < guestlist.length; k++) {
    console.log("Dear ".concat(guestlist[k], ",\n     I would like to invitation for you to join me for dinner.\n     Best Regards, \n     [Arsalan Ali]\n    "));
}
