/* ================================= Variable and Output */
const text = `this is an exercise in console logging`;

console.log(text);
console.log(`${text}`);

/* ================================= Variable + Variable */
let firstName = "philipp";
let lastName = "moser";

console.log(`${firstName} ${lastName}`);

// Print to the console the size of each string, and then print to the console the total sum of all strings

const bioText =
    "Brendan Eich (/ˈaɪk/; born July 4, 1961) is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation's chief technical officer and briefly, as its chief executive officer. He is the CEO of Brave Software.";

const earlyLifeText =
    "Eich grew up in Pittsburgh; Gaithersburg, Maryland; and Palo Alto, and he attended Ellwood P. Cubberley High School, graduating in the class of 1979. He received his bachelor's degree in mathematics and computer science at Santa Clara University, and he received his master's degree in 1985 from the University of Illinois at Urbana-Champaign. He began his career at Silicon Graphics, working for seven years on operating system and network code. He then worked for three years at MicroUnity Systems Engineering writing microkernel and DSP code.";

const netscapeTimeText =
    'Eich started work at Netscape Communications Corporation in April 1995. Eich originally joined intending to put Scheme " in the browser", but his Netscape superiors insisted that the language\'s syntax resemble that of Java. As a result, Eich devised a language that had much of the functionality of Scheme, the object-orientation of Self, and the syntax of Java. He completed the first version in ten days in order to accommodate the Navigator 2.0 Beta release schedule, and was called Mocha, but renamed LiveScript in September 1995 and finally named JavaScript in December. Eich continued to oversee the development of SpiderMonkey, the specific implementation of JavaScript in Navigator.';

const textLength =
    bioText.length + earlyLifeText.length + netscapeTimeText.length;

console.log(bioText.length);
console.log(earlyLifeText.length);
console.log(netscapeTimeText.length);

console.log(textLength);

// # Profile card
// ​
// Let's make a profile of someone's information.
// ​
// Store all the related information in variables:
// - first name
// - last name
// - age
// - where the person lives
// - what the person does for a living
// ​
// Print each of the variables to the console.
// ​
// Next, make a template for a profile card with the variables and print it to the console.
// ​
// For example: "Jane Doe is 56 years old. Jane currently lives in London and works as a teacher."
// ​
// Next, print the card for another two people.

//initial variables
firstName = "philipp2";
lastName = "moser2";
let age = 33;
let wherThePersonLives = "berlin";
let whatThePersonDoes = "bla";

//print all variables
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(wherThePersonLives);
console.log(whatThePersonDoes);

//template
console.log(`\n\n${firstName}\n${lastName}\n${age}\n\n`);

//template2
console.log(
    `${firstName} ${lastName} is ${age} years old. ${firstName} currently lives in London and works as a teacher.\n\n`
);



//more people and use template
firstName = "xxx";
lastName = "yyy";
age = 22;
wherThePersonLives = "oh";
whatThePersonDoes = "blabla";

console.log(
    `${firstName} ${lastName} is ${age} years old. ${firstName} currently lives in London and works as a teacher.\n\n`
);


// # First and last character
// ​
// Take the first and last character and log them to the console, capitalized, separated by dots.
// ​
// For example with the word `apple`, the output to the console should be: `A.E.`.
// ​
// Sample text:
// ​
// - Jane Doe
// - Technology Strategy Patterns
// - James Bond 007

let text1 = "Jane Doe";

console.log(text1[0].toUpperCase() + "." + text1[text1.length - 1].toUpperCase() + ".");
console.log(`${text1[0].toUpperCase()}.${text1[text1.length - 1].toUpperCase()}.`);
//output J.E.


// # Modify last character
// ​
// Using JavaScript, take the last character and repeat it 3 times, then print the result to the console.
// ​
// Use these three text samples:
// ​
// - Cat
// - What?
// - Hey there, hello


text1 = "Cat";
console.log(text1[text1.length - 1].repeat(3));

text1 = "What?";
console.log(text1[text1.length - 1].repeat(3));


// # Suprise talk
// ​
// Tranform the sample texts into surprised talking and log the transformed text to the console. For example with `incredible`, the output to the console should be: 
// `in..in..incredible`
// ​
// Sample text: 
// ​
// - unbelievable
// - romatic
// - holiday
// - fast

// `in..in..incredible`
text1 = "unbelivable";

console.log(`${text1[0]}${text1[1]}..${text1[0]}${text1[1]}..${text1}`);
//output un..un..unbelivable


