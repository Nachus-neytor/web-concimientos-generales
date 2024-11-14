const questions = [
    {
        question: "¿Cual es la velocidad de la luz en el vacio?",
        answers: [
            { text: "3,000.000 km/s", correct: false },
            { text: "3,000 km/s", correct: false },
            { text: "300,000 km/s", correct: true },
            { text: "30,000 km/s", correct: false }
        ]
    },
    {
        question: "¿Que fenomeno describe la tendencia de los cuerpos a permanecer en reposo o movimiento constante?",
        answers: [
            { text: "Fuerza", correct: false },
            { text: "Inercia", correct: true },
            { text: "Energia", correct: false },
            { text: "Gravedad", correct: false }
        ]
    },
    {
        question: "¿Cuál es el estado de la materia que tiene un volumen y forma definidos?",
        answers: [
            { text: "Liquido", correct: false },
            { text: "Solido", correct: true },
            { text: "Gas", correct: false },
            { text: "Plasma", correct: false }
        ]
    },
    {
         question: "¿Qué ley de Newton establece que toda accion tiene una reaccion igual o opuesta ?",
        answers: [
            { text: "Ley de gravitacion universal", correct: false },
            { text: "Segunda ley", correct: false },
            { text: "Primera ley", correct: false },
            { text: "Tercera ley", correct: true }
        ]
    },
    {
        question: "¿Cuál es la fuersa que atrae los objetos hacia la tierra?",
        answers: [
            { text: "Magnetismo", correct: false },
            { text: "Friccion", correct: false },
            { text: "Gravedad", correct: true },
            { text: "Energia", correct: false }
        ]
    },
    {
        question: "¿Cuál es el astro que ilumina nuestro planeta?",
        answers: [
            { text: "Sol", correct: true },
            { text: "Luna", correct: false },
            { text: "Marte", correct: false},
            { text: "Estrellas", correct: false}
        ]
    },
    {
        question: "¿Que propiedad mide la cantidad de un objeto?",
        answers: [
            { text: "Peso", correct: false },
            { text: "Volumen", correct: false },
            { text: "Masa", correct: true },
            { text: "Densidad", correct: false }
        ]
    },
    {
        question: "¿Que es un atomo neutro ?",
        answers: [
            { text: "Un atomo sin protones", correct: false },
            { text: "Un atomo sin electrones", correct: false },
            { text: "Un atomo sin neutrones", correct: false },
            { text: "un atomo con igual numero protones y neutrones", correct: true }
        ]
    },
    {
        question: "¿Que significa MRU?",
        answers: [
            { text: "Un atomo sin protones", correct: false },
            { text: "Movimiento Rectilineo Uniforme ", correct: true },
            { text: "Masa Regular Universal", correct: false },
            { text: "Materia Responsable Unitaria", correct: false }
        ]
    },
    {
        
        question: "¿Que instrumento se usa para medir la presion?",
        answers: [
            { text: "Higrometeo", correct: false },
            { text: "Termometro", correct: false },
            { text: "Amperimetro", correct: false },
            { text: "Barometro", correct: true }
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
