var guestlist = ["Sami", "Zeshan", "Asad", "Ahmed"];
// Ahmed can't join our dinner so remove this
var rglist = guestlist.indexOf("Ahmed");
guestlist.splice(rglist, 2);
// as we found new bigger table
// add guest in beggning of array
guestlist.unshift("Musabeh");
// add guest in middle of array
guestlist.splice(2, 0, "Zia khan");
// add new guest at the end of array
guestlist.push("Zain");
for (var m = 0; m < guestlist.length; m++) {
    console.log("Dear ".concat(guestlist[m], ", \n    I would like to invitation for you to join me for dinner.\n     Best Regards, \n     [Arsalan Ali]\n    "));
}
