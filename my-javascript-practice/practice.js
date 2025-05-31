// // Dollars signs $ and underscores _ are the only symbols that are allowed in variable names such as $first_name.

// // a variable is a box that we can store a value in.

// // convention variables are all caps.

// // always make sure that all your code is written in a clean manner. always!!



// // these two lines below are much easier to understand than the two lower ones
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// // these two variables are a lot harder to understand the meaning of than the two on top.
// let job1 = 'Programmer';
// let job2 = 'Teacher';

// console.log(myCurrentJob);
// console.log(myFirstJob);
// console.log(job1);
// console.log(job2);


// let language = 'English';

// // number: floating point numbers - used for decimals and integers.
// let age = 23;

// // string: sequence of characters - used for text.
// let first_Name = 'George';

// // boolean: logical type that can only be true or false.
// let fullAge = true;


// // undefined: value taken by a variable that is not yet defined('empty value').
// // Null: also means 'empty value'.
// let children;

// // symbol: value that is unique and connot be changed [not useful for now]

// // BigInt: larger integers than the number type can hold.


// // JavaScript has dynamic typing: we do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.


// let age = 30;
// age = 32;

// const firstName = 'Isaac'; /*the const function is basically what it sounds like. it is constant, which means 
// that you can not change the value of the variable in the future. it is immutable.*/

// let favoriteFood = 'Pizza'; //the 'let' function allows you to change the value of a variable in the future if you choose to do so.

// var last_Name = 'Keinspinski'; // never use var to define a variable. this basically an obsolete method of defining a variable.

// const now = 2025;

// const birthyearIsaac = now - 2000;
// const birthyearSean = now - 2006;
// console.log(birthyearIsaac, birthyearSean);

// console.log(birthyearIsaac * 2, birthyearSean / 2, 2 ** 3);

// const firstName = 'Tommy';
// const lastName = 'Versetti';
// console.log(firstName + ' ' + lastName);



// const y = 20 + 10;
// y += 20;/*this would not work beacause the fact that the declaration 'const' enforces immutability for variables,
//         which means these variable will stay the same throughout the code even if you try to redefine it.
//         so when we try to do the value of y + 20 it doesn't allow us to do so because y is already defined above with a 'const'*/
// console.log(y);

// let x = 10 + 6; /*this works because the 'let' declaration allows for reassignment in the future if needed.*/
// x += 20;
// console.log(x);

const flightNumber = 'LH123';
const numberOfPassengers = 6;
const price = 600;



// ___________________________________________________________________________________
// this function is for the multiplying the price by the number of passengers
const multipleOfBoth = (a, b) => {
        [a, b] = [numberOfPassengers, price];
        return a * b;
}
let result = multipleOfBoth();
// ___________________________________________________________________________________



const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 200){
        const booking = {
                flightNum,
                numPassengers,
                price,
        };
        console.log(booking);
        bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 400);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking(flightNumber, undefined, `$${price} x ${numberOfPassengers} = ${result}`);