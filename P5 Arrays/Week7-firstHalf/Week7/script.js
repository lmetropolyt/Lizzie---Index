var flavour1 = "chocolate";
var flavour2 = "vanilla";
var flavour3 = "neopolitan";
var flavour4 = "strawberry";
var flavour5 = "Matcha!!!";
var flavour6 = "Mint Chocolate Chip";

// array is like a list
// store many pieces of data in one namespace
var flavours = ['chocolate', 'vanilla', 'Matcha'];
// arrays are objects!

console.log(  flavours[-2.986769] ); // if you access anything other than the stored items arrays return undefined

console.log( flavours.length )
// arrays can store data with mixed types
flavours[0] = true;
flavours[3] = {};
flavours[5] = undefined;

console.log( flavours.length )
console.log(flavours);

console.log(flavours[5]);
console.log(flavours[6]);

for(var i = 0; i < flavours.length; i++){
    console.log( flavours[i] );
    flavours[i] = 'chocolate';
}

// generics
for(flavour of flavours){
    console.log( flavour );
}

var moreFlavours = ['Mango', 'Cappuccino', 'bubble gum', 'kiwi'];

// flavours[flavours.length] = moreFlavours[0];
// flavours[flavours.length] = moreFlavours[1]; 

for(flavour of moreFlavours){
    flavours.push(flavour);
}
console.log(flavours);

// var thelength = flavours.length;
// for(var i = 0; i < thelength; i++){
//     flavours.pop();
// }

console.log(flavours)


//////////////////////

var ptags = document.getElementsByTagName("p");
console.log(ptags);
for(var i = 0; i < ptags.length; i++){
    ptags[i].innerHTML = flavours[i];
}

var classyitems = document.getElementsByClassName("classy");
for(thing of classyitems){
    thing.innerHTML = "classsssy";
}