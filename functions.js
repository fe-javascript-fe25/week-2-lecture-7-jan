helloWorld();
// helloWorldAgain(); // Dessa två kallas aldrig på eftersom de inte existerar innan de skapas
// helloWorldArrowFunction();

function helloWorld() {
    console.log('Hello world!');
}

let helloWorldAgain = function() {
    console.log('Hello world from a function expression!');
}

let helloWorldArrowFunction = () => {
    console.log('Hello world from Arrow Function!')
}

helloWorldAgain();
helloWorldArrowFunction();

let name1 = 'Börje';
let name2 = 'Jesper';

sayHello(name1, name2);

function sayHello(first, second = 'Kim') {
    console.log(`Hejsan ${first} & ${second}!`);
}

let myName = 'Jesper'; // Bor på plats ...801
myName = changeName(myName);
console.log(changeName(myName));

function changeName(name) { // name bor på plats ...896
    name = 'Oliver';
    return name;
}
let sum =multiply(3, 9);
console.log(sum);

function multiply(num1, num2) {
    return num1 * num2;
}