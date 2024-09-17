// Spørsmål og svar
const questions = [
    {
        question: "Hva er en viktig metode i historisk analyse?",
        answers: ["Kildeanalyse", "Imperialisme", "Brudd og kontinuitet", "Hegemoni"],
        correct: "Kildeanalyse"
    },
    {
        question: "Hva er et eksempel på bakenforliggende årsak?",
        answers: ["Økonomiske faktorer", "En enkelt hendelse", "Politisk beslutning", "En krig"],
        correct: "Økonomiske faktorer"
    },
    {
        question: "Hva var en hovedårsak til jordbruksrevolusjonen?",
        answers: ["Økt matproduksjon", "Oppdagelse av metallarbeid", "Utvikling av skriftspråk", "Bygging av store byer"],
        correct: "Økt matproduksjon"
    },
    {
        question: "Hvordan fungerte demokratiet i Athen?",
        answers: ["Direkte demokrati", "Representativt demokrati", "Aristokrati", "Monarki"],
        correct: "Direkte demokrati"
    },
    {
        question: "Hva var en kjennetegn på en sivilisasjon?",
        answers: ["Skriftsystem", "Jakt og sanking", "Nomadisk livsstil", "Ingen sosial hierarki"],
        correct: "Skriftsystem"
    },
    {
        question: "Hva var en av hovedforskjellene mellom Athen og Sparta?",
        answers: ["Kvinner hadde mer frihet i Sparta", "Athen var et monarki", "Sparta var et demokrati", "Athen tillot ikke noen form for utdanning"],
        correct: "Kvinner hadde mer frihet i Sparta"
    },
    {
        question: "Hva var en årsak til at Romerriket ble delt?",
        answers: ["Ytre press fra barbarerne", "Indre maktkamp", "Både ytre og indre årsaker", "Manglende ressurser"],
        correct: "Både ytre og indre årsaker"
    },
    {
        question: "Hva var Pax Romana?",
        answers: ["En periode med kaos", "En periode med fred og stabilitet", "Et stort opprør", "En filosofisk bevegelse"],
        correct: "En periode med fred og stabilitet"
    },
    {
        question: "Hva er et kjennetegn ved det romerske patron-klient-systemet?",
        answers: ["Økonomisk støtte og beskyttelse", "En form for slaveri", "Et militært hierarki", "Religiøse ritualer"],
        correct: "Økonomisk støtte og beskyttelse"
    },
    {
        question: "Hva var en av årsakene til at kristendommen ble dominerende i Europa?",
        answers: ["Romersk støtte", "Økonomisk styring", "Militære erobringer", "Teknologisk utvikling"],
        correct: "Romersk støtte"
    }
];

// Funksjon for å blande en liste
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// HTML-elementer
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const nextQuestionButton = document.getElementById("nextQuestion");

// Variabler for quizlogikken
let currentQuestionIndex = 0;
let score = 0;
const incorrectQuestions = [];

// Funksjon for å vise neste spørsmål
function showQuestion() {
    feedbackElement.textContent = ""; // Tømmer forrige feedback
    nextQuestionButton.style.display = "none"; // Skjuler neste-spørsmål knappen
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    const answers = [...currentQuestion.answers];
    shuffle(answers); // Blander svaralternativene
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
            if (!incorrectQuestions.includes(currentQuestionIndex)) {
                incorrectQuestions.push(currentQuestionIndex); // Legger til feil spørsmål
            }
        }
    });

    // Oppdaterer score
    if (selectedAnswer === correctAnswer) {
        score++;
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
        showResults();
    }
}

// Funksjon for å vise resultater
function showResults() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    nextQuestionButton.style.display = "none";

    feedbackElement.textContent = `Du fikk ${score} av ${questions.length} riktige.`;
    feedbackElement.style.color = "black";

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        feedbackElement.textContent += " Du fikk feil på følgende spørsmål:\n";
        incorrectQuestions.forEach(index => {
            const listItem = document.createElement("li");
            listItem.textContent = questions[index].question;
            incorrectList.appendChild(listItem);
        });
        feedbackElement.appendChild(incorrectList);
    }
}

// Event listener for neste-spørsmål knappen
nextQuestionButton.addEventListener("click", nextQuestion);

// Start quizen ved å vise det første spørsmålet
shuffle(questions); // Blander spørsmålene
showQuestion();