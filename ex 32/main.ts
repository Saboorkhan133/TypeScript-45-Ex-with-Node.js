let current_users = ["usama","Ali","Areeba","Zain","osman"]


let new_users = ["Mahad","Ali","Areeba","Ayesha","Hamza"]
//loop through new user to check for usernames avaibility

new_users.forEach(new_one_user =>{
   let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
if(our_condition){
console.log(`Sorry ${new_one_user} is already taken!`)
}else{
    console.log(`This Username ${new_one_user} is available`)
}
})