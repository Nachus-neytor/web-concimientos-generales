const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: [
            { text: "Berlín", correct: false },
            { text: "Madrid", correct: false },
            { text: "París", correct: true },
            { text: "Lisboa", correct: false }
        ]
    },
    {
        question: "¿Qué es la fotosíntesis?",
        answers: [
            { text: "Un proceso de reproducción", correct: false },
            { text: "Un proceso químico en plantas", correct: true },
            { text: "Una forma de energía", correct: false },
            { text: "Una técnica de cultivo", correct: false }
        ]
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        answers: [
            { text: "Abraham Lincoln", correct: false },
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "¿Cuál es el pais mas grande y el mas pequeño del mundo ?",
        answers: [
            { text: "Rusia y Vaticano", correct: true },
            { text: "China y Nauro", correct: false },
            { text: "Canada y Monaco", correct: false },
            { text: "India y San Marino", correct: false }
        ]
    },
    {
        question: "¿Cuál es el libro mas vendido en el mundo despues de la biblia?",
        answers: [
            { text: "El señor de los anillos", correct: true },
            { text: "Don Quijote de la Mancha", correct: false },
            { text: "Cien años de Soledad"},
            { text: "El Principito"}
        ]
    },
    {
        question: "¿En que periodo de la preistoria fue descubierto el fuego ?",
        answers: [
            { text: "Neolitico", correct: false },
            { text: "Paleolitico", correct: true },
            { text: "Edad de los metales", correct: false},
            { text: "Edad de piedra", correct: false}
        ]
    },
    {
        question: "¿Cual es la montaña mas alta del continente americano?",
        answers: [
            { text: "Monte Everest", correct: false },
            { text: "Monte Fuji", correct: false },
            { text: "Pico Bolivar", correct: false},
            { text: "Aconcagua", correct: true}
        ]
    },       
    {
        question: "¿Cual es la cultura mas antigua de Amerca del Sur?",
        answers: [
            { text: "La cultura Quechua", correct: false },
            { text: "La cultura Inca", correct: false },
            { text: "la cultura Caral", correct:true}
        ]
    },
    {
        question: "¿Cual es la montaña mas alta de Bolivia?",
        answers: [
            { text: " Sumaj Ork'o", correct: false },
            { text: "Ancohuma", correct: false },
            { text: "Chearoco", correct: false},
            { text: "Illimani", correct: true}
        ]
    },
    {
        question: "¿Quién fue la primera mujer en gobernar Bolivia?",
        answers: [
            { text: "Jeanine Añes", correct: false },
            { text: "Lilly Gabriela Montaño", correct: false },
            { text: "Lidia Gueiler", correct: true},
            { text: "Eva Copa", correct: false}
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
