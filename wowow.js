for (let i = 1; i <= 3; i++) {
    console.log(i)
  }
  
  i = 1;
  while (i <= 3) {
    console.log(i)
    i++
  }
  
  i = 1;
  do {
    console.log(i)
    i++
  } while (i <= 3);
  
  
  // skip by 2 loops
  for (let i = 0; i <= 6; i = i + 2) {
    console.log(i)
  }
  
  i = 0;
  while (i <= 6) {
    console.log(i)
    i = i + 2;
  }

  do {
    console.log(i)
    i = i + 2
  } while (i <= 6);

// arrays
grades = [75, 98, 99, 100]
for (let i = 0; i < 4; i++) { // or replace 4 by grades.length to be sure :)
    console.log(grades[i])
}
console.log(grades[2])

for (var grade of grades) {
    console.log(grade)
}

grades.forEach(print_grade)

function print_grade(grade) {
    console.log(grade)
}