/*
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0;

let solutions = '';

let q1 = prompt('How do you use querySelector?');
let q1Answer = '#1 is incorrect. It should equal "assigning to the document object."<br>';

let q2 = prompt('How do you change a string variable to a number?');
let q2Answer = '#2 is incorrect. It should equal "+variable."<br>';

let q3 = prompt('When should we use const as a variable?');
let q3Answer = '#3 is incorrect. It should equal "When the variable will not change."<br>';

let q4 = prompt('At what price should you buy Tesla stock again?');
let q4Answer = '#4 is incorrect. It should equal "$450."<br>';

let q5 = prompt('How much will the web development industry grow in the next 10 years?');
let q5Answer = '#5 is incorrect. It should equal "20 percent."<br>';


if ( q1 === 'assigning to the document object' ) {
    correct += 1;
} else {
    solutions += `${q1Answer}`;
}

if ( q2 === '+variable' ) {
    correct += 1;
} else {
    solutions += `${q2Answer}`;
}

if ( q3 === 'When the variable will not change' ) {
    correct += 1;
} else {
    solutions += `${q3Answer}`;
}

if ( q4 === '$450' ) {
    correct += 1;
} else {
    solutions += `${q4Answer}`;
}

if ( q5 === '20 percent' ) {
    correct += 1;
} else {
    solutions += `${q5Answer}`;
}

// 2. Store the rank of a player

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


let rank;
let wisdomWords;

if ( correct === 5 ) {
    rank = 'Gold';
    wisdomWords = 'Congrats! You\'re a badass';
} else if ( correct === 3 || correct === 4 ) {
    rank = 'Silver';
    wisdomWords = 'Nice work! You\'re slightly above average';
} else if ( correct === 1 || correct === 2 ) {
    rank = 'Bronze';
    wisdomWords = 'Well, you\'re completely average';
} else if ( correct === 0 ) {
    rank = 'No crown';
    wisdomWords = 'Start studying mofo';
}


// 6. Output results to the <main> element

document.querySelector('main').innerHTML = `<p>${rank} <br> ${wisdomWords} <br> ${solutions}</p>`;