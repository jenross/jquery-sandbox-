let qtemplate = '';
let intervalId;
let qTimer = 30;
//will need to add images; might be good to store these in their own js file
let quiz = [
{   
    question: 'How many plays did Shakespeare write?',
    answers: ['At least 100', 'At least 57', 'At least 38', 'At least 21'],
    correctAnswer: 'At least 38'
}, 
{
    question: 'Who was the first person to win the National Book Award?',
    answers: ['Mark Twain', 'William Shakespeare', 'Virginia Woolf', 'Nelson Algren'],
    correctAnswer: 'Nelson Algren'
}   
];

//need to figure out how to get this to go from question to question
function handleQandA() {

    for (let questionCount = 0; questionCount < quiz.length; questionCount++) {
        
        qtemplate = `<div class='question-template'>
    
        <h2>${quiz[questionCount].question}</h2>

        <form>
        <fieldset>
    
        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[0]}'>
        <span>${quiz[questionCount].answers[0]}</span>
        </label>

        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[1]}'>
        <span>${quiz[questionCount].answers[1]}</span>
        </label>

        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[2]}'>
        <span>${quiz[questionCount].answers[2]}</span>
        </label>

        <label class='answer-choices'>
        <input type='radio' name='answer-option' value='${quiz[questionCount].answers[3]}'>
        <span>${quiz[questionCount].answers[3]}</span>
        </label>
    
        </fieldset>
        </form>
        </div>`;
        
    }
    // questionCount++;
    $('.qanda-disp').append(qtemplate);
}

handleQandA();
questionTimerRun();

function questionTimerRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    qTimer--;
    $('.timer').text(qTimer);
    if (qTimer === 0) {
        clearInterval(intervalId);
        //handleResponse();
    }
}

function handleResponse()  {

}

function nextQuestion() {
    $('.qanda-disp').empty();

}

function startQuiz() {

}