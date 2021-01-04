/* ================================= Exercise 1 */
const text = `this is an exercise in console logging`;

console.log(text);
console.log(`${text}`);

//Variable + Variable
let firstName = "philipp";
let lastName = "moser";

console.log(`${firstName} ${lastName}`);

/* ================================= Exercise 2 */
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

/* ================================= Exercise 3 */
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

/* ================================= Exercise 4 */
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

console.log(
    text1[0].toUpperCase() + "." + text1[text1.length - 1].toUpperCase() + "."
);
console.log(
    `${text1[0].toUpperCase()}.${text1[text1.length - 1].toUpperCase()}.`
);
//output J.E.

/* ================================= Exercise 5 */
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

/* ================================= Exercise 6 */
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

/* ================================= Exercise 7 */
// # String transformation

// In the JavaScript file, there is a sample sentence. With the use of JavaScript, make the words `html` and `css` upper case, then add 3 empty lines, and the text `The End`.
// Log the result to the console.

const sampleText = "I love html. Also css is awesome.";

console.log(
    `${sampleText.replace("html", "HTML").replace("css", "CSS")}\n\nThe End`
);


/* ================================= Exercise 8 */

// # Truncate the text
// ​
// In the JavaScript file, the two samples of text are quite long. Let's truncate them, and display only part of them.
// ​
// The maximum number of characters that should be displayed is `128`.
// ​
// Print to the console only the characters up to the specified max value and then add ellipsis (`...`).
// ​
// Make sure there is no trailing white space between the last character of the truncated text and the ellipsis.
// ​
// Righ after it, print to the console the size of the original string with a message explaining what this number stands for.
// Next, print to the console how many characters were hidden, again together with a message to explain what this number stands for.
// ​
// How can you make the number of characters that can be dispalyed easily configurable?


const textSample = `In November 1996, Netscape submitted JavaScript to ECMA International, as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first ECMAScript language specification in June 1997.
The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.
Meanwhile, Microsoft gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%.[18] This meant that JScript became the de facto standard for client-side scripting on the Web.
Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on ECMA work. Thus ECMAScript 4 was mothballed.`;

const textSample02 = `Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of ECMAScript 6 in 2015.[24]
​
From 2016 to 2019, a new version of the ECMAScript standard was published each year, but the scope of changes was much smaller than the 5th or 6th editions. Thus JavaScript can now be considered a mature language that has largely settled down.`;


/* ================================= First TEXT */


let input = textSample;
let shorterText = input.substring(0, 127); //shorten text to 128 character
// console.log(`test short text: ${shorterText}`);

// 127 characters + delete white space if available
let textWithoutWhiteSpace = input.substring(0, 126) + shorterText[shorterText.length - 1].replace(" ", "");
// console.log(`test textWithoutWhiteSpace: ${textWithoutWhiteSpace}`);


console.log(`output: ${textWithoutWhiteSpace}... Textlength: ${input.length} Hidden: ${input.length - 128} `);
//output: In November 1996, Netscape submitted JavaScript to ECMA International, as the starting point for a standard specification that... Textlength: 872 Hidden: 744 

/* ================================= Second TEXT */

input = textSample02;
shorterText = input.substring(0, 127); //shorten text to 128 character
// console.log(`test short text: ${shorterText}`);

// 127 characters + delete white space if available
textWithoutWhiteSpace = input.substring(0, 126) + shorterText[shorterText.length - 1].replace(" ", "");

console.log(`output: ${textWithoutWhiteSpace}... Textlength: ${input.length} Hidden: ${input.length - 128} `);
//output: Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements... Textlength: 440 Hidden: 312