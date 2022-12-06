let billAmount = 100;
function gratuity(billAmountArg){
    let withGratuity = billAmountArg*0.2;
    return withGratuity
}
function totalWithGratuity(billAmountArg) {
    let newTotal = gratuity(billAmountArg) + (billAmount);
    return newTotal
}

console.log("your total with grituity is: " + totalWithGratuity(billAmount));
