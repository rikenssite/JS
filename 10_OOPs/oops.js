//  Understanding to create a new Object
const details = { 
    username:"riken",
    loginCount : 8,
    signedIn: true,
    getUserDetails:function(){
        console.log("Got all details")
//      console.log(`username is ${username}`)      // ERROR, username is not defined
        console.log(`username is ${this.username}`)
    }
}



function user(username, loginCount, signedIn) {
        this.username = username
        this.loginCount = loginCount
        this.signedIn = signedIn
    }


const userOne = new user("PATEL",34,false)
const userTwo = new user("SHEITH",32,false)

console.log(userOne)
console.log(userTwo)
