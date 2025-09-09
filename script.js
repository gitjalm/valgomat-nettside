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

function showQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("question").innerText = questions[questionIndex].question;
        questionIndex++;
    } else {
        document.getElementById("question").innerText = "Takk for at du tok valgomaten!";
        // Add logic to display a end screen.
    }
}

const buttons = document.getElementsByClassName("buttons");
for (let btn of buttons) {
    btn.addEventListener("click", showQuestion);
}