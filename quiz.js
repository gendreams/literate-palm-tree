// Correct Order of Execution
// 1. Functions
// 2. Variables
// 3. Kick Off
// 4. Event Listeners


function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers){

                // ...add an HTML radio button
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // Steps - loop over answers, check them, show results
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of the users answers
    let numCorrect = 0;
    // for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
          // look inside the container for the current question
        const answerContainer = answerContainers[questionNumber];
          // define a CSS selector to help find which radio button is checked
        const selector = `input[name=question${questionNumber}]:checked`;
          // use a querySelector to search for our CSS selector in the previously defined answerContainer -
            // i.e find which answer's radio button is checked
        const userAnswer = (answerContainer.querySelector(selector) || {}).value; // get the value of the answer
          // if there is no answer selected, use an empty object - This allows the user to skip a question without crashing the quiz

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;
            // color it green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if the answer is wrong or blank
        else {
            // color it red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show the number of correct answers out of the total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('Check Answers');

const myQuestions = [
    {
        question: "How do you use querySelector?",
        answers: {
            a: "select the document object",
            b: "use innerHTML",
            c: "Select each query"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you change a string variable to a number?",
        answers: {
            a: "string.ToNumber()",
            b: "+",
            c: "number.ToString()"
        },
        correctAnswer: "b"
    },
    {
        question: "When should we use const as a variable?",
        answers: {
            a: "all the time",
            b: "sometimes",
            c: "When the variable needs to change often",
            d: "When the variable will not change"
        },
        correctAnswer: "d"
    },
    {
        question: "At what price should you buy Tesla stock again?",
        answers: {
            a: "Elon is crazy AF",
            b: "$450",
            c: "$550",
            d: "$850"
        },
        correctAnswer: "b"
    },
    {
        question: "How much will the web development industry grow in the next 10 years?",
        answers: {
            a: "5%",
            b: "8%",
            c: "Your mom",
            d: "not at all"
        },
        correctAnswer: "d"
    }
];



// display quiz immediately

buildQuiz();

// on submit, show results

submitButton.addEventListener('click', showResults);
