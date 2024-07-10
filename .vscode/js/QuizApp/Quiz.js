
// [{},{},{},{}]  -> json format - rray of an object 


const questions=[
    {
    question:"Which one from these is language is for front-end ?",
    answers:[
        {text:"html",correct:true},
        {text:"node",correct:false},
        {text:"express",correct:false},
        {text:"C++",correct:false}
    ]
},

{
    question:"Which programing language is fastest of all with OOP's ?",
    answers:[
        {text:"Java",correct:false},
        {text:"C++",correct:true},
        {text:"Python",correct:false},
        {text:"C",correct:false}
    ]
},

{
    question:"Java is _________ language ?",
    answers:[
        {text:"Compiled",correct:false},
        {text:"Iterpreted",correct:false},
        {text:"Boath 1 & 2",correct:true},
        {text:"None of the above",correct:false}
    ]
},

{
    question:"Which one of the following is suitable for creating database ?",
    answers:[
        {text:"java",correct:false},
        {text:"node",correct:false},
        {text:"SQL",correct:true},
        {text:"C++",correct:false}
    ]
}
]

const questionElement =document.getElementById("question")
const answerButton =document.getElementById("answer-button")
const nextButton =document.getElementById("next-btn")


let currentQuestionIndex;
let score;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
 
    questionElement.innerHTML=questionNo + " . "+ currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{      // answer - work as an iterator which means it traverse on object one by one .
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);


        if(answer.correct){
            button.dataset.correct = answer.correct  // dataset is prebuilt fonction that store any value for temporary period if we reload it then it refresh
        }

        button.addEventListener("click", selectAnswer)

    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}


function selectAnswer(event){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }

        button.disabled=true;

    })

    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your score is ${score}`
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
