var guestlist:string[] = ["Sami", "Zeshan", "Asad", "Ahmed"];
// Ahmed can't join our dinner so remove this
const rglist = guestlist.indexOf("Ahmed");
guestlist.splice(rglist,2);
// Add new guest in our list
guestlist.push("Zain");

for(var k = 0; k <guestlist.length; k++){
    console.log(`Dear ${guestlist[k]},
     I would like to invitation for you to join me for dinner.
     Best Regards, 
     [Arsalan Ali]
    ` )
}