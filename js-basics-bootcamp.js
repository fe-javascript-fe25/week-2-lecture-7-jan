/*
1. Vilka datatyper finns det i JS?

Svar: 
number, string, boolean, array, undefined, object, null

*/

/*
2. Är följande if sats true eller false?

let a = 1;
let b = '1';
if(a == b) // true or false

Svar:
true

*/

/*
3. Vad är den tekniska skillnaden på dessa två deklarationer?

let name = "Greta Thunberg";
var name = "Greta Thunberg";

Svar:
Skillnaden är vilket scope de får. var skapar ett globalt scope, medans let får ett lokalt scope

*/

/*
4. Skapa variabeln myStr som du tilldelar en sträng, myNum som du tilldelar ett nummer, och myBool som du tilldelar en boolean.

Svar:
let myStr = 'Hejsan';
let myNum = 34;
let myBool = false;

*/

/*
5. Hur tar man reda på vad en variabel har för datatyp? Testa på variablerna från övning 4.

Svar:
console.log(typeof myNum);

*/

/*
6. Skriv ett program som frågar användaren efter två tal och sparar dem i variabler. Sedan ska det skriva ut talens summa, differens och produkt. Du kan använda dig av .prompt()-funktionen för att ta input från användaren.

Svar:
let num1 = Number(prompt('Vänligen ange ett tal'));
let num2 = Number(prompt('Vänligen ange ett tal till'));
let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;

console.log(sum, diff, prod);
console.log(sum + ' ' + diff + ' ' + prod);

*/




/*
7.Vilken av följande syntax visar ett kodblock?

[] // A
() // B
{} // C

Svar: C

*/

/*
8. Vad i följande kod är blocket som exekveras?

function hello() {
    console.log("Hello");
}
function goodbye() {
    console.log("Goodbye");
}
hello();

Svar: Hello

*/

/*
9. Vad kommer stå i console.log()?

var greeting = "Good bye world!";

{
    let greeting = "Hello World";
}

console.log(greeting);

Svar: Good bye World!

*/

/*
10. Vilken av följande syntax är korrekt sätt att skriva strängar.

"Hello World"; // A
'Hello World'; // B
`Hello World`; // C

Svar: Alla!
let myStr = 'Jag heter Jesper, men brukar kallas för "Jeppe"'

*/


/*
11. Räkna antal tecken i strängen nedan.

let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one.";

Svar:
console.log(sentence.length);

*/

/*
12. Tilldela variabeln myName ett värde, och använd sedan strängkonkatenering för att stoppa in den i meningen istället för N.

let myName = "<Ditt namn>"
`Hej N din gamle knasboll!`;

Svar:
let myName = 'Jesper';
console.log('Hej ' + myName + ' din gamle knasboll!');

*/

/*
13. Gör en template string där N ersätts med variabeln myName.

let myName = "<Ditt namn>"
`Hej N din gamle knasboll!`;

Svar:
let myName = 'Jesper';
console.log(`Hej ${myName} din gamle knasboll`);

*/

/*
14. Gör om uppgift 13, men låt istället användaren själv ange sitt namn med hjälp av .prompt()-funktionen. Skriv sedan ut meningen med hjälp av .alert()-funktionen.

let myName = INPUT från användaren
`Hej N din gamle knasboll!`

Svar:
let username = window.prompt('Ange ditt namn');
alert(`Hej ${username} din gamla knasboll!`);

*/

/*
15. Gör om alla tecken i strängen nedan till stora bokstäver.

let sentence = "They see me coding, debugging";

Svar:
console.log(sentence.toUpperCase());

*/

/*
16. Plocka ut de 4 första tecknen i strängen nedan för att ta reda på vilket år det är. Använd sedan .concat() för att skriva ut sentence.

let date = "20260107";
let sentence = "<YEAR> ska jag lära mig att koda!";

Svar:
let date = "20260107";
let sentence = " ska jag lära mig att koda!";
let year = date.slice(0, 4);
console.log(year.concat(sentence));

*/

/*
17. Undersök om variabeln sentence nedan innehåller ordet debug.


Svar:
let sentence = "You only get one loop, don't miss your chance to debug, 'cause an infinite loop can break your runtime.";
console.log(sentence.includes('debug'));

*/

/*
18. Ta bort alla kommatecken från variabeln sentence nedan.


Svar:

*/
let sentence = "I said a git push, the puller, the puller to the git git push, and the commit.";
console.log(sentence.replaceAll(',', ' '));

/*
19. Arunda talet 1337.51 nedåt till närmaste heltal med hjälp av Math object.

Svar:
console.log(Math.floor(1337.51));

*/

/*
20. Arunda talet 1337.48 uppåt till närmaste heltal med hjälp av Math object.

Svar:
console.log(Math.ceil(1337.48));

*/

/*
21. Arunda talet 1337.497 till närmaste heltal med hjälp av Math object.

Svar:
console.log(Math.round(1337.597));

*/


/*
22. Slumpa fram ett tal mellan 1 - 100.

Svar:
let random = Math.floor(Math.random() * 6 + 1)
console.log(random);

*/


/*
23. Skriv ett program som frågar användaren efter ett lösenord. Hitta på ett hemligt lösenord och spara det i en variabel. När användaren har skrivit in ett ord ska programmet jämföra med det sparade lösenordet och skriva ut om det var rätt eller inte. Använd en if-sats.

Svar:
let pWord = 'jesperärbäst';
let userInput = prompt('Ange lösenord!');

if(pWord === userInput) {
    alert('Välkommen in!');
} else {
    alert('Error');
}

*/


/*
24. Skriv ett program som frågar användaren efter ett tal. Det ska skriva ut om talet är mindre än 100, lika med 100 eller större.

Svar:
let number = Number(prompt('Ange ett tal'));
if(number < 100) {
    console.log('Mindre');
} else if(number > 100) {
    console.log('Större');
    
} else if(number === 100) {
    console.log('100');
}

*/

/*
25. För att åka en viss karusell på Liseberg behöver ditt barn vara minst 10 år gammal, och vara längre än 135 cm lång. Skriv ett program där användaren kan ange sitt barns ålder och längd, och ta sedan reda på om barnet får åka karusellen. Levelup: om barnet inte får åkakarusellen, förklara då exakt vilken anledningen är.

Svar:
let age = Number(prompt('Ange ålder'));
let length = Number(prompt('Ange längd')); 

if(age >= 10 && length >= 135) {
    console.log('Välkommen du får åka!');
} else {
    if(age < 10 && length < 135) {
        console.log('Du är både för kort och för ung!');
    } else if(age < 10) {
        console.log('Du är för ung');
    } else if(length < 135) {
        console.log('Du är för kort');
    } else {
        console.log('Unexpected error');
    }
}

*/

/*
26. Skapa en for-loop som skriver ut talen 1 till 100 i konsollen.

Svar:
for(let i = 1; i <= 100; i++) {
    console.log(i);
}

*/

/*
27. Gör om övning 26, men använd denna gången en while-loop. Vilka justerngar behöver du göra?

Svar:
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

*/




/*
28. Skapa en for-loop så körs 100 gånger. Inuti varje loop skall du slumpa fram ett tal mellan 1 - 100. Räkna sedan ut medelvärdet av dina 100 slumpningar.

Svar:
let sum = 0;
for(let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 100 + 1)
    // let sum = sum + random;
    sum += random;
}

console.log(sum / 100);

*/


/*
29. Skapa en while-loop som körs tills du lyckats slumpa fram ett valt tal mellan 1 - 100. Levelup: håll koll på hur många gånger du slumpat och skriv sedan ut detta i konsollen.

Svar:
let number = 66;
let rounds = 0;
let random;

while(random !== number) {
    random = Math.floor(Math.random() * 100 + 1);
    console.log(random);
    rounds++;
}

console.log(`Talet slumpades fram efter ${rounds} rundor`);

*/


/*
30. Be användaren mata in sitt födelsedatum enligt (YYYYMMDD-XXXX). Använd en while-loop som körs tills användaren har angett korrekt antal tecken. Skriv sedan ut användarens fyra sista siffror i konsollen.


Svar:

*/

let correctInput = false;
while(!correctInput) {
    let birthdate = prompt("Ange födelsedatum i formatet (YYYYMMDD-XXXX)");
    if(birthdate.length === 13 && birthdate.includes('-')) {
        correctInput = true;
        console.log(birthdate.slice(-4));
    }
    
}


