var isLoggedIn = false
var user
function verfiyLogIn() {
    console.log(isLoggedIn);
    if(isLoggedIn)
        return {isLoggedIn,user}
}
module.exports = {isLoggedIn,user,verfiyLogIn}