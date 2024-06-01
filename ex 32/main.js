var current_users = ["usama", "Ali", "Areeba", "Zain", "osman"];
var new_users = ["Mahad", "Ali", "Areeba", "Ayesha", "Hamza"];
//loop through new user to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
