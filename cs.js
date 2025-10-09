/* for(let i = 2; i <=20; i += 2){
    console.log(i);
}

grades = [75, 98, 99, 100];
for(let i = 0; i < grades.length; i++){
    console.log(grades[i]);
} 

process.stdin.on('data', input => {

  let num = input.toString().trim();

  /* square(num);

function square(num){
    console.log(num * num);
}

process.exit(); 
});



let friends = ["frances", "bri", "amber", "maggie"];
friends.shift();
friends.push("bea");

for(let i = 0; i < 4; i++){
    console.log(friends[i]);
}

console.log("break");
console.log(friends); */

let grades = [85, 92, 78, 90, 88];

// 1. Using a for loop
for (let i = 0; i < grades.length; i++) {
  console.log("Grade:", grades[i]);
}

// 2. Using for...of
for (let grade of grades) {
  console.log("Grade (for...of):", grade);
}

// 3. Using forEach
grades.forEach(print_grade);
function print_grade(grade) {
  console.log("Grade (forEach):", grade);
}
