const usernames = ["Arsalan", "ali", "admin", "sami", "asad"]
for(const username of usernames){
    if(username === "admin"){
        console.log("Hello admin would you like to see status report?")
    }
    else{
        console.log("Hello " +username +"Thank you for logging again " );
    }
}
