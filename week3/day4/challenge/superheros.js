let superHeros = [
    ["Batman", "Bruce Wayne"],
    ["Spiderman", "Peter Parker"],
    ["The Flash", "Barry Allen"]
];

secretIdentity = superHeros.map(function(revealArray){
    return ( revealArray.join( " is "))
})
console.log(secretIdentity)