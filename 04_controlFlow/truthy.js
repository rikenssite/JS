const username = "mrRiken.ca"

if (username){ 
    console.log(`${username} username exists`)
}

/*  

falsy values
false,"", '', 0, -0, null, undefined, BigInt 0n, NaN


trutly values
true " ", [],{},function(){}

*/
data = [] // true
data2 = {} // true
data3 = " " // true 



//  Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1) // 5 since it was first true value

val1 = null ?? undefined ?? undefined ?? 111 ?? 100 ?? null ?? 121
// val1 = 111 since 111 was first true value
console.log(val1)

// Terniary Operator
// condition ? true:false

const userLoggedIn = 1
userLoggedIn == true ? console.log("Yes, Logged In") : console.log("No, Not Logged In")