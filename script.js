let usersname = prompt ("What is your name?");
console.log(usersname);
let hole = prompt ("Would you like to play 3 or 6 holes of golf?");
console.log(hole)
let total = 0;
let par = Number()

if (hole === "3") {
    par = Number( prompt ("How many putts in hole 1?"));
    console.log("Number of putts" ,par)
    total += par
    par = Number( prompt ("How many putts in hole 2?"));
    console.log("Number of putts" ,par)
    total += par
    par = Number( prompt ("How many putts in hole 3?"));
    console.log("Number of putts" ,par)
    total += par - 9
}

  if (hole === "6") {
    par = Number( prompt ("How many putts in hole 1?"));
    console.log("Number of putts" ,par)
    total += par
    par = Number(prompt ("How many putts in hole 2?"));
    console.log("Number of putts" ,par)
    total += par
    par = Number(prompt ("How many putts in hole 3?"));
    console.log("Number of putts" ,par)
    total += par
    par = Number(prompt ("How many putts in hole 4?"));
    console.log("Number of putts" ,par)
    total += par
    par = Number(prompt ("How many putts in hole 5?"));
    console.log("Number of putts" ,par)
    total += par
    par = Number(prompt ("How many putts in hole 6?"));
    console.log("Number of putts" ,par)
    total += par - 18
  }

if(total > 0) {
    console.log(`Nice try ${usersname}. Your total par was: +(${par}).`);
    total += par
}

if(total < 0) {
    console.log(`Great job, ${usersname}! Your total par was: -(${par}).`)
}

if(total ===0) {
        console.log(`Good game, ${usersname}. Your total par was: 0.`
        )
    }