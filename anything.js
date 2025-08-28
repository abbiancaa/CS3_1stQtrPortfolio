// gma - 7
// abs-cbn 2
// ibc - 13
// ptv - 4
// tv5 -5

require('readline').createInterface({
    input: process.stdin,
}).on('line', give_channel_name)

function give_channel_name(num){ 
    switch(num){
        case '7':
            console.log("gm" + "a");
            break;
        case '2':
            console.log("abs", "-cbn");
            break;
        case '13':
            var last_letter = "c";
            console.log(`ib${last_letter}`);
            break;
        case '4':
            console.log('ptv')
            break;
        case '5':
            console.log('tv5')
            break;
        default:
            console.log('invalid channel')
    }
}