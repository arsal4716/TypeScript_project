function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
function show_magicians(magicians) {
    console.log(magicians);
}
var magicians = ['Arsalan', 'ahsan', 'ali', 'ali', 'zain', 'farhan'];
make_great(magicians);
show_magicians(magicians);
