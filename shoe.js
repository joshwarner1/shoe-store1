'use strict';

alert('Warning Shoe Lovers Only!!! ');

let userName = prompt ('What is your nickname ');
let favoriteShoe = prompt('What is your favorite shoe? ');
console.log('Whats Good!!!! ' + userName);
document.write('Whats Good!!!! ' + userName);

let shoeJordanNumber = prompt('What is your favorite pair of jordans or favorite sneaker? ');
console.log(typeof(shoeJordanNumber));

let message;

if (shoeJordanNumber < 13) {
    message = 'You got Steeze ';
} else if  (shoeJordanNumber > 13){
    message = 'Thats cool ';
} else if (shoeJordanNumber <= 8){
       message= 'These are the Best of the Best!!! ';
}    else { 
message = 'All Styles of shoewear is accepted here !!!! '
}

console.log(typeof(message));

console.log(message);
document.write(message);
