
function generateRandomNumber(num){
    return Math.floor(Math.random()*num)
    }


const joke =  {

firstPart: ["whats black and white and red all over?", "knock knock?", "What do sprinters eat before a race?", "What happens when you witness a ship wreck?", "What does a clock do when it’s hungry?"],
secondPart: ["a penguin reading a newspaper", "who's there?", "nothing, they fast", "it goes back four seconds", "You let it sink in"],
finalPart: ["hahaha! Get it?", "isabell necessary riding on a bicycle?","well if that isn't the funniest joke I've ever heard!", "oh my, that is too funny!"]
}

let hilariousJoke = [];

for (let part in joke){
    let specificPieceOfJoke = generateRandomNumber(joke[part].length);
    switch(part){
        case "firstPart":
            hilariousJoke.push(`part 1, ${joke[part][specificPieceOfJoke]},`)
     break  
    
    case "secondPart":
    hilariousJoke.push(`part 2, ${joke[part][specificPieceOfJoke]},`)
    break
    case "finalPart":
        hilariousJoke.push(`part 3, ${joke[part][specificPieceOfJoke]},`)
        break
        default:
        hilariousJoke.push('There is not enough info.')
}}


function formatJoke(joke) {
    const formattedJoke = hilariousJoke.join('\n');
    console.log(formattedJoke);
}

formatJoke(hilariousJoke)