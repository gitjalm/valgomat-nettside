let questions = [
    {
        question: "Mener du at avgiftene bør senkes så du kan beholde mer av dine egne penger? ",
        answer: "helt-enig",
        userAnswer: ""
    },
    {
        question: "Synes du innvandring har gjort Norge til et bedre land?",
        answer: "helt-uenig",
        userAnswer: ""
    },
    {
        question: "Vil du ha sterkere straffer for mobbere på skolen?",
        answer: "helt-enig",
        userAnswer: ""
    },
    {
        question: "Mener du at vi bør begynne med kjernekraft i Norge?",
        answer: "helt-enig",
        userAnswer: ""
    },
    {
        question: "Mener du at Norge bør melde seg ut av NATO?",
        answer: "helt-uenig",
        userAnswer: ""
    },
    {
        question: "Mener du at Norge har et stort problem med gjengkriminalitet?",
        answer: "helt-enig",
        userAnswer: ""
    },
    {
        question: "Mener du at den kriminelle lav alderen bør senkes?",
        answer: "helt-enig",
        userAnswer: ""
    },
    {
        question: "Mener du at Norge skal få strengere straffer?",
        answer: "helt-enig",
        userAnswer: ""
    },
    {
        question: "Er det urettferdig at de som kan betale, får raskere behandling i helsevesenet?",
        answer: "litt-uenig",
        userAnswer: ""
    },
    {
        question: "Bør vi satse mer på kollektivtransport i Norge?",
        answer: "helt-uenig",
        userAnswer: ""
    },
]

let questionIndex = 0;
let score = 0;

function startPage() {
    document.getElementById("content").innerHTML += `
        <button class="nxt-pre-strt-button" id="start-button">Start</button>`;
    initStartButton();
}

function endPage() {
    document.getElementById("content").innerHTML = `
        <h1 id="title">Resultat</h1>
        <p id="description">Takk for at du tok valgomaten!</p>
        <h2 id="result">Du er ${score}% enig med FrP!</h2>`;
}

function loadContent() {
    document.getElementById("content").innerHTML = `
        <p id="question-index"></p>
        <h1 id="title">Valgomat</h1>
        <p id="description">Finn ut hvor enig du er med FrP!</p>
        <div id="container">
            <div id="question"></div>
            <div id="buttons">
                <button class="choice-buttons" id="helt-uenig"><p>Helt uenig</p></button>
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
}

function initStartButton() {
    document.getElementById("start-button").addEventListener("click", function() {
        loadContent();
        showQuestion();
        initButtons();
    });
}

function initButtons() {
    const buttons = document.getElementById("buttons");
    buttons.addEventListener('click', function(event) {
        if (event.target.classList.contains('choice-buttons')) {
            const currentSelected = buttons.querySelector('.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }
            event.target.classList.add('selected');
            choiceSelected(event.target.id);
        }
    })

    document.getElementById("next-button").addEventListener("click", function() {
        if (questionIndex < questions.length - 1) {
            questionIndex++;
            showQuestion();
            restoreSelected();
        } else {
            countScore();
            console.log(score)
            endPage();
        }
    })

    document.getElementById("previous-button").addEventListener("click", function() {
        if (questionIndex > 0) {
            questionIndex--;
            showQuestion();
            restoreSelected();
        }
    })
}

function showQuestion() {
    document.getElementById("question").innerText = questions[questionIndex].question;
    updateQuestionIndex();
}

function countScore() {
    score = 0;
    questions.forEach((question) => {
        if (question.answer === question.userAnswer) {
            console.log("correct")
            score += 10;
        } else {
            const splittedtext = question.answer.split("-")
            const splittedtext2 = question.userAnswer.split("-")
            if (splittedtext[1] === splittedtext2[1]) {
                console.log("half correct")
                score += 5;
            } else {
                console.log("incorrect")
            }
        }
    });
}

function choiceSelected(choice) {
    if (questionIndex > questions.length) {
        console.log("There is no more questions.");
        return;
    } else {
        questions[questionIndex].userAnswer = choice;
    }
}

function restoreSelected() {
    const buttons = document.querySelectorAll('.choice-buttons');
    buttons.forEach(btn => btn.classList.remove('selected'));
    const answer = questions[questionIndex].userAnswer;
    if (answer) {
        const btn = document.getElementById(answer);
        if (btn) {
            btn.classList.add('selected');
        }
    }
}

function updateQuestionIndex() {
    document.getElementById("question-index").innerText = questionIndex + 1 + "/" + questions.length;
}

document.addEventListener('DOMContentLoaded', () => {
    startPage();
});