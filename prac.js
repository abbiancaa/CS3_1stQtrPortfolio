process.stdin.on('data', input => {

  let hi = input.toString().trim();

  greet(hi);

function greet(hi){
    console.log("hello whoever u are" + " im doing", hi );
}

process.exit();
});