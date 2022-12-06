let hands = ['rock','paper','scissors'];
function getComputerHand(){

    let myNumberSelection = hands[(parseInt(Math.random()*10) % 3)]
    return myNumberSelection
}

//compare function
function compare(choice1, choice2, hands){
    if(choice1 >  choice2){
        console.log()

        console.log(winner + " with choice " + hands[winner] + " has won ")
}

console.log(getComputerHand(hands))

    let aaron = getComputerHand();
    let sarah = getComputerHand();

    compare(aaron, sarah, hands);
}

