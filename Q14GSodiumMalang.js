process.stdin.on('data', input => {

  let greeting = input.toString().trim();

hola();

function hola(greeting){
    switch(greeting){
        case "HELLO":
            console.log("ENGLISH");
            break;
        case "MABUHAY":
            console.log("TAGALOG");
            break;
        case "HOLA":
            console.log("SPANISH");
            break;
        case "HALLO":
            console.log("GERMAN");
            break;
        case "BONJOUR":
            console.log("FRENCH");
            break;
        case "CIAO":
            console.log("ITALIAN");
            break;
        case "ZDRAVSTUJTE":
            console.log("RUSSIAN");
            break;
        default:
            console.log("UNKNOWN");

    }
}


  process.exit();

});