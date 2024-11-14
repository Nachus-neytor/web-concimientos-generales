const questions = [
    {
        question: "¿Cuál es la formula para sacar el area de un triangulo ?",
        answers: [
            { text: "b*a/5", correct: false },
            { text: "a*b/3", correct: false },
            { text: "b*a/2", correct: true },
            { text: "b*a/9", correct: false }
        ]
    },
    {
        question: "¿La suma de dos numeros impares, siempre es par?",
        answers: [
            { text: "si es par", correct: true },
            { text: "no es par", correct: false }
        ]
    },
    {
        question: "¿La suma de los angulos de un triangulo siempre es 180°?",
        answers: [
            { text: "falso", correct: false },
            { text: "verdadero", correct: true }
        ]
    },
    {
        question: "¿cual es el valior de PI?",
        answers: [
            { text: "3.4545", correct: false },
            { text: "3.1416", correct: true },
            { text: "3.1516", correct: false},
            { text: "3.1216", correct: false}
        ]
    },       
    {
        question: "¿Que estudia el teorema de pitagoras?",
        answers: [
            { text: "Relacion entre los lados de un triangulo", correct: true },
            { text: "Relacion entre los lados de un rectangulo", correct: false },
            { text: "Relacion entre entre figuras geometricas", correct: false}
        ]
    },
    {
        question: "¿Cual es la raiz cubica de 125?",
        answers: [
            { text: "15", correct: false },
            { text: "25", correct: false },
            { text: "10", correct: false},
            { text: "5", correct: true}
        ]
    },
    {
        question: "¿Cual es el resultado de: 8+8*3?",
        answers: [
            { text: "36", correct: false },
            { text: "30", correct: false },
            { text: "32", correct: true},
            { text: "42", correct: false}
        ]
    },
    {   question: "¿Cual es la raiz cubica de 27?",
        answers: [
            { text: "3", correct: true},
            { text: "7", correct: false},
            { text: "5", correct: false},
            { text: "8", correct: false}

        ]
    },
    {
        question: "¿Cuantos decimales tiene el numero Pi ?",
        answers: [
            { text: "Dos", correct: false},
            { text: "Cien", correct: false},
            { text: "Infinitos", correct: true},
            { text: "Mil", correct: false}
        ]
    },
    {
        question:"¿Cuantos segundos ay en un dia?",
        answers: [
            { text: "86,000 segundos", correct: false},
            { text: "86,200 segundos", correct: false},
            { text: "86,400 segundos", correct: true},
            { text: "86,300 segundos", correct: false}
        ]
    }

   
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text && correct) {
            button.style.backgroundColor = 'green';
        } else if (button.innerText === answer.text && !correct) {
            button.style.backgroundColor = 'red';
        }
    });
    nextButton.style.display = 'block';
}

function showScore() {
    questionContainer.style.display = 'none';
    scoreContainer.innerText = `Tu puntaje es: ${score} de ${questions.length}`;
    scoreContainer.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
});

startGame();
