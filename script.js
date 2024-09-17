// Spørsmål og svar
const questions = [
    {
        question: "Hva er en viktig metode i historisk analyse?",
        answers: ["Kildeanalyse", "Imperialisme", "Brudd og kontinuitet", "Hegemoni"],
        correct: "Kildeanalyse"
    },
    {
        question: "Hva var en markant endring som jordbruksrevolusjonen førte til?",
        answers: ["Mindre arbeid", "Mer arbeid", "Økt sivilisasjonsdannelse", "Mindre sivilisasjonsdannelse"],
        correct: "Økt sivilisasjonsdannelse"
    },
    {
        question: "Hva var en av hovedforskjellene mellom Athen og Sparta?",
        answers: ["Kvinner hadde mer frihet i Sparta", "Athen var et monarki", "Sparta var et demokrati", "Athen tillot ikke noen form for utdanning"],
        correct: "Kvinner hadde mer frihet i Sparta"
    },
    {
        question: "Hva var en viktig årsak til at Romerriket ble delt?",
        answers: ["Ytre press fra barbarerne", "Indre maktkamp", "Både ytre og indre årsaker", "Manglende ressurser"],
        correct: "Både ytre og indre årsaker"
    },
    {
        question: "Hva var Pax Romana?",
        answers: ["En periode med kaos", "En periode med fred og stabilitet", "Et stort opprør", "En filosofisk bevegelse"],
        correct: "En periode med fred og stabilitet"
    }
];

// HTML-elementer
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const nextQuestionButton = document.getElementById("nextQuestion");

// Variabler for quizlogikken
let currentQuestionIndex = 0;

// Funksjon for å vise neste spørsmål
function showQuestion() {
    feedbackElement.textContent = ""; // Tømmer forrige feedback
    nextQuestionButton.style.display = "none"; // Skjuler neste-spørsmål knappen
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    const answers = currentQuestion.answers;
    choicesElement.innerHTML = ""; // Tømmer gamle svaralternativer

    // Legger til nye svaralternativer
    answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("answer");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(button, answer, currentQuestion.correct));
        choicesElement.appendChild(button);
    });
}

// Funksjon for å sjekke svar
function checkAnswer(selectedButton, selectedAnswer, correctAnswer) {
    // Marker riktig svar med grønn
    document.querySelectorAll('.answer').forEach(button => {
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "green"; // Riktig svar blir grønn
        } else if (button === selectedButton && selectedAnswer !== correctAnswer) {
            button.style.backgroundColor = "red"; // Feil svar blir rød
        }
    });

    // Gi tilbakemelding
    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = "Riktig!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Feil, riktig svar er: " + correctAnswer;
        feedbackElement.style.color = "red";
    }

    // Viser "Neste Spørsmål"-knappen
    nextQuestionButton.style.display = "block";

    // Deaktiver videre klikk på svarene
    document.querySelectorAll('.answer').forEach(button => {
        button.disabled = true;
    });
}

// Funksjon for å gå til neste spørsmål
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        feedbackElement.textContent = "Gratulerer! Du har fullført quizen.";
        questionElement.style.display = "none";
        choicesElement.style.display = "none";
        nextQuestionButton.style.display = "none";
    }
}

// Event listener for neste-spørsmål knappen
nextQuestionButton.addEventListener("click", nextQuestion);

// Start quizen ved å vise det første spørsmålet
showQuestion();