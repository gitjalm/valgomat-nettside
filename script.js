let questions = [
    {
        question: "Mener du at avgiftene bør senkes så du kan beholde mer av dine egne penger? ",
        answer: "Helt Enig",
        userAnswer: ""
    },
    {
        question: "Synes du innvandring har gjort Norge til et bedre land?",
        answer: "Helt Uenig",
        userAnswer: ""
    },
    {
        question: "Vil du ha sterkere straffer for mobbere på skolen?",
        answer: "Helt Enig",
        userAnswer: ""
    },
    {
        question: "Mener du at vi bør begynne med kjernekraft i Norge?",
        answer: "Helt Enig",
        userAnswer: ""
    },
    {
        question: "Mener du at Norge bør melde seg ut av NATO?",
        answer: "Helt Uenig",
        userAnswer: ""
    },
    {
        question: "Mener du at Norge har et stort problem med gjengkriminalitet?",
        answer: "Helt Enig",
        userAnswer: ""
    },
    {
        question: "Mener du at den kriminelle lav alderen bør senkes?",
        answer: "Helt Enig",
        userAnswer: ""
    },
    {
        question: "Mener du at Norge skal få strengere straffer?",
        answer: "Helt Enig",
        userAnswer: ""
    },
    {
        question: "Er det urettferdig at de som kan betale, får raskere behandling i helsevesenet?",
        answer: "Litt Uenig",
        userAnswer: ""
    },
    {
        question: "Bør vi satse mer på kollektivtransport i Norge?",
        answer: "Helt Uenig",
        userAnswer: ""
    },
]

let questionIndex = 0;

function startPage() {
    document.getElementById("content").innerHTML += `
        <button class="nxt-pre-strt-button" id="start-button">Start</button>`;
    initStartButton();
}

function loadContent() {
    document.getElementById("content").innerHTML = `
        <p id="question-index"></p>
        <h1 id="title">Valgomat</h1>
        <p id="description">Finn ut hvor enig du er med Frp!</p>
        <div id="container">
            <div id="question"></div>
            <div id="buttons">
                <button class="choice-buttons" id="helt-uening"><p>Helt uenig</p></button>
                <button class="choice-buttons" id="litt-uenig"><p>Litt uenig</p></button>
                <button class="choice-buttons" id="vet-ikke"><p>Vet Ikke</p></button>
                <button class="choice-buttons" id="litt-enig"><p>Litt enig</p></button>
                <button class="choice-buttons" id="helt-enig"><p>Helt enig</p></button>
            </div>
        </div>
        <div>
            <button class="nxt-pre-strt-button" id="previous-button">Tilbake</button>
            <button class="nxt-pre-strt-button" id="next-button">Neste</button>
        </div>`;
    showQuestion();
    initButtons();
}

function initStartButton() {
    document.getElementById("start-button").addEventListener("click", function() {
        loadContent();
    });
}

function initButtons() {
    const buttons = document.getElementsByClassName("choice-buttons");
    for (let btn of buttons) {
        btn.addEventListener("click", showQuestion);
    }

    document.getElementById("next-button").addEventListener("click", function() {
        if (questionIndex <= questions.length) {
            showQuestion();
        }
    })

    document.getElementById("previous-button").addEventListener("click", function() {
        if (questionIndex > 1) {
            questionIndex -= 2;
            showQuestion();
        }
    })
}

function showQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("question").innerText = questions[questionIndex].question;
        updateQuestionIndex();
        questionIndex++;
    } else {
        document.getElementById("question").innerText = "Takk for at du tok valgomaten!";
        // Add logic to display a end screen.
    }
}

function updateQuestionIndex() {
    document.getElementById("question-index").innerText = questionIndex + 1 + "/" + questions.length;
}

document.addEventListener('DOMContentLoaded', () => {
    startPage();
});