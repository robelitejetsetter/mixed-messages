const firstPart = ["whats black and white and red all over?", "knock knock?", "What do sprinters eat before a race?", "What happens when you witness a ship wreck?", "What does a clock do when it’s hungry?"];
const secondPart = ["a penguin reading a newspaper", "who's there?", "nothing, they fast", "it goes back four seconds", "You let it sink in"];
const finalPart = ["hahaha! Get it?", "isabell necessary riding on a bicycle?","well if that isn't the funniest joke I've ever heard!", "oh my, that is too funny!"];

function randomCode () {
    

    const ranNum1 = Math.floor(Math.random()*firstPart.length);
    const ranNum2 = Math.floor(Math.random()*secondPart.length);
    const ranNum3 = Math.floor(Math.random()*finalPart.length);
    const firstRandomPart = firstPart[ranNum1];
    const secondRandomPart = secondPart[ranNum2];
    const thirdRandomPart = finalPart[ranNum3];

    console.log(`here is your joke: ${firstRandomPart}, ${secondRandomPart} ..... ${thirdRandomPart}`)

}

randomCode()
