// Spørsmål og svar
const questions = [
    // Generelt
    {
        question: "Hva er kildeanalyse?",
        answers: ["Studie av kildenes opprinnelse og pålitelighet", "Analyse av økonomiske trender", "Undersøkelse av sosiale strukturer", "Studie av geografiske forhold"],
        correct: "Studie av kildenes opprinnelse og pålitelighet"
    },
    {
        question: "Hva er brudd og kontinuitet i historisk sammenheng?",
        answers: ["Hvordan endringer og vedvarende trekk påvirker samfunn", "Forskning på politiske bevegelser", "Utvikling av teknologiske innovasjoner", "Studie av kulturelle praksiser"],
        correct: "Hvordan endringer og vedvarende trekk påvirker samfunn"
    },
    {
        question: "Hva er en bakenforliggende årsak?",
        answers: ["En underliggende årsak som kan ha påvirket hendelsen", "Den umiddelbare årsaken til hendelsen", "Den primære årsaken til en situasjon", "En tilfeldighet som førte til hendelsen"],
        correct: "En underliggende årsak som kan ha påvirket hendelsen"
    },
    {
        question: "Hva kjennetegner en sivilisasjon?",
        answers: ["Utvikling av komplekse samfunnsstrukturer og skriftsystem", "Enkel organisering og nomadisk livsstil", "Fravær av teknologi og byer", "Fokus på jakt og sanking"],
        correct: "Utvikling av komplekse samfunnsstrukturer og skriftsystem"
    },
    {
        question: "Hva er imperialisme?",
        answers: ["Politikk for å utvide et lands makt og innflytelse", "Studie av antikke monumenter", "En filosofisk ide om demokratisk styre", "Teknologiske fremskritt i en sivilisasjon"],
        correct: "Politikk for å utvide et lands makt og innflytelse"
    },
    // Oldtid og tidlige sivilisasjoner
    {
        question: "Hva var den kognitive revolusjonen?",
        answers: ["En periode med økt utvikling av språk og kognitive ferdigheter", "Overgangen fra jakt og sanking til jordbruk", "Utviklingen av metallarbeid", "Oppfinnelsen av skriftsystemer"],
        correct: "En periode med økt utvikling av språk og kognitive ferdigheter"
    },
    {
        question: "Hva var hovedtrekkene ved livet som jegere og samlere?",
        answers: ["Nomadisk livsstil og små grupper", "Stasjonært liv og store byer", "Komplekse samfunnsstrukturer og skriftsystemer", "Utvikling av avansert teknologi"],
        correct: "Nomadisk livsstil og små grupper"
    },
    {
        question: "Hva var en viktig årsak til jordbruksrevolusjonen?",
        answers: ["Overgang fra jakt og sanking til jordbruk for mer stabil matforsyning", "Oppdagelse av metallarbeid", "Utvikling av store byer", "Introduksjon av skriftsystemer"],
        correct: "Overgang fra jakt og sanking til jordbruk for mer stabil matforsyning"
    },
    {
        question: "Hva var standardteorien om jordbruksrevolusjonen?",
        answers: ["Overgang fra jakt og sanking til jordbruk som en løsning på befolkningsvekst", "Utvikling av skriftsystemer for administrasjon", "Oppdagelse av metallarbeid for bedre verktøy", "Bygging av store byer"],
        correct: "Overgang fra jakt og sanking til jordbruk som en løsning på befolkningsvekst"
    },
    {
        question: "Hva var en alternativ teori til standardteorien om jordbruksrevolusjonen?",
        answers: ["Utviklingen av jordbruk som et resultat av kulturell og sosial innovasjon", "Begrenset tilgang på mat som førte til jordbruk", "Politisk press for å utvikle jordbruk", "Økt krigføring som drev behovet for jordbruk"],
        correct: "Utviklingen av jordbruk som et resultat av kulturell og sosial innovasjon"
    },
    {
        question: "Hva er et kjennetegn ved sivilisasjon?",
        answers: ["Skriftsystem og komplekse samfunnsstrukturer", "Jakt og sanking", "Nomadisk livsstil", "Manglende teknologisk utvikling"],
        correct: "Skriftsystem og komplekse samfunnsstrukturer"
    },
    // Hellas
    {
        question: "Hva er en bystat (polis) i antikkens Hellas?",
        answers: ["En selvstyrt politisk enhet med egne lover og styresett", "En stor region under en konge", "Et religiøst senter", "En militær leir"],
        correct: "En selvstyrt politisk enhet med egne lover og styresett"
    },
    {
        question: "Hvordan fungerte demokratiet i Athen?",
        answers: ["Direkte deltakelse av borgerne i beslutningsprosesser", "Representativt demokrati med valgte representanter", "Aristokratisk styre", "Monarkisk styre"],
        correct: "Direkte deltakelse av borgerne i beslutningsprosesser"
    },
    {
        question: "Hva var ostrakisme i Athen?",
        answers: ["En prosess for å ekskludere politiske personer som utgjorde en trussel", "En form for skatteinnkreving", "En religiøs seremoni", "En militær strategi"],
        correct: "En prosess for å ekskludere politiske personer som utgjorde en trussel"
    },
    {
        question: "Hva kjennetegnet det spartanske samfunnets fellesskap?",
        answers: ["Sterk vekt på kollektivt fellesskap og militær disiplin", "Fokus på individuell frihet og demokrati", "Politisk makt hos aristokratiet", "Fravær av militær organisering"],
        correct: "Sterk vekt på kollektivt fellesskap og militær disiplin"
    },
    {
        question: "Hva var Hellenismen?",
        answers: ["En kulturutveksling og blanding av gresk og orientalsk kultur etter Alexander den store", "En filosofi utviklet i Sparta", "En religiøs bevegelse i Athen", "En økonomisk teori i Hellas"],
        correct: "En kulturutveksling og blanding av gresk og orientalsk kultur etter Alexander den store"
    },
    {
        question: "Hva var en av de viktigste forskjellene mellom kvinnens rolle i Athen og Sparta?",
        answers: ["Kvinner i Sparta hadde mer sosial frihet og ansvar enn i Athen", "Kvinner i Athen hadde flere militære plikter", "Kvinnene i Athen hadde mer politisk makt enn i Sparta", "Kvinnene i Sparta var forbudt å eie eiendom"],
        correct: "Kvinner i Sparta hadde mer sosial frihet og ansvar enn i Athen"
    },
    // Romerriket
    {
        question: "Hva var en konsul i Romerriket?",
        answers: ["En av de to høyeste embetsmennene valgt for å lede staten", "En militær leder under keiserriket", "En rådgiver for senatet", "En administrator for provinsene"],
        correct: "En av de to høyeste embetsmennene valgt for å lede staten"
    },
    {
        question: "Hvordan fungerte styringsformen i Romerriket?",
        answers: ["Republikk med konsuler, senat, og folkeforsamlinger", "Monarki med en konge", "Demokrati med direkte deltakelse", "Aristokrati med en liten gruppe elitister"],
        correct: "Republikk med konsuler, senat, og folkeforsamlinger"
    },
    {
        question: "Hva var patron-klient-systemet i Romerriket?",
        answers: ["En sosial struktur basert på gjensidig støtte mellom patroner og klienter", "En form for skatteinnkreving", "Et militært rangsystem", "En type religiøst ritual"],
        correct: "En sosial struktur basert på gjensidig støtte mellom patroner og klienter"
    },
    {
        question: "Hva var Pax Romana?",
        answers: ["En periode med relativ fred og stabilitet i Romerriket", "En serie militære erobringer", "En politisk revolusjon", "En økonomisk krise"],
        correct: "En periode med relativ fred og stabilitet i Romerriket"
    },
    {
        question: "Hva var årsakene til at Romerriket ble delt?",
        answers: ["Både ytre press fra barbarene og indre politiske utfordringer", "Økonomisk vekst", "Religiøs enhet", "Kulturell enhet"],
        correct: "Både ytre press fra barbarene og indre politiske utfordringer"
    },
    {
        question: "Hva var en av hovedårsakene til at Vest-Romerriket falt?",
        answers: ["Barbariske invasjoner og indre politiske konflikter", "Økt handelsaktivitet", "Bredere militærallianser", "Kulturell stabilitet"],
        correct: "Barbariske invasjoner og indre politiske konflikter"
    },
    {
        question: "Hva var årsakene til at kristendommen ble den dominerende religionen i Europa?",
        answers: ["Romersk støtte og spredning gjennom misjonering", "Mangel på andre religioner", "Militære erobringer", "Kulturelle endringer"],
        correct: "Romersk støtte og spredning gjennom misjonering"
    },
    {
        question: "Hva var det romerske patron-klient-systemet?",
        answers: ["Et sosialt og politisk system basert på gjensidig støtte mellom en patron og hans klienter", "Et militært system for rekruttering", "En økonomisk modell for skattlegging", "En type juridisk prosedyre"],
        correct: "Et sosialt og politisk system basert på gjensidig støtte mellom en patron og hans klienter"
    },
    {
        question: "Hva var de viktigste forskjellene mellom Roma og de greske bystatene?",
        answers: ["Roma utviklet et republikansk styre og ble en supermakt, mens greske bystater var uavhengige og ofte i konflikt", "Roma var mer kulturelt utviklet", "Greske bystater hadde mer økonomisk makt", "Roma hadde en mer avansert teknologi"],
        correct: "Roma utviklet et republikansk styre og ble en supermakt, mens greske bystater var uavhengige og ofte i konflikt"
    },
    {
        question: "Hva var årsakene til at Romerriket ble et keiserdømme?",
        answers: ["Økt politisk ustabilitet og maktkamp", "Økonomisk fremgang", "Stabilt militært lederskap", "Kulturell blomstring"],
        correct: "Økt politisk ustabilitet og maktkamp"
    },
    {
        question: "Hva var Pax Romana?",
        answers: ["En lang periode med fred og stabilitet i Romerriket", "En militær konflikt mellom Roma og nabostater", "En periode med økonomisk nedgang", "En religiøs reformasjon"],
        correct: "En lang periode med fred og stabilitet i Romerriket"
    },
    {
        question: "Hva var en av årsakene til at Vest-Romerriket forsvant?",
        answers: ["Barbariske invasjoner og interne konflikter", "Kulturell fremgang", "Økonomisk ekspansjon", "Religiøs enhet"],
        correct: "Barbariske invasjoner og interne konflikter"
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

    feedbackElement.textContent = `Gratulerer! Du har fullført quizen. Du fikk ${score} av ${questions.length} riktige.`;
    feedbackElement.style.color = "black";

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        feedbackElement.textContent += " Du fikk feil på følgende spørsmål:";
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