//will need more initial directions and button to begin game 

let qtemplate = '';
let intervalId;
let qTimer = 30;
let questionCount = 0;
let btwQTimer = 5;//maybe too long? 
let score = 0;   
//will need to add images; might be good to store these in their own js file;
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

function handleQandA() {

    // for (let questionCount = 0; questionCount < quiz.length; questionCount++) {
        
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

        <button type="submit" class="submit-btn">Submit</button>
    
        </fieldset>
        </form>
        </div>`;

    //     let correctAnswer = `${quiz[questionCount].correctAnswer}`;
    //     console.log(correctAnswer);
    // }
    // questionCount++;
    $('.qanda-disp').append(qtemplate);
    questionTimerRun();
}

// handleQandA();
// questionTimerRun();
// handleResponse();

function questionTimerRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//get time remaining to be part of this so it can hide, too 
function decrement() {
    qTimer--;
    $('.timer').text(qTimer);
    if (qTimer === 0) {
        clearInterval(intervalId);
        // handleResponse();
    }
}

function timeToNextQ() {
    clearInterval(intervalId);
    intervalId = setInterval(decrementBtw, 1000);
}

function decrementBtw() {
    btwQTimer--;
    if (btwQTimer === 0) {
        console.log("on to the next");
        nextQuestion();
        handleQandA();
    }
}

//answer correct or incorrect, img and message displayed
//need to add in what happens when time runs out 
//goes immediately to next question without delay 
function handleResponse()  {
    $('.submit-btn').on('click', function (event){
        event.preventDefault();
        let userAnswer = $('input:checked').val();
        console.log(userAnswer);
        let correctAnswer = `${quiz[questionCount].correctAnswer}`;
        console.log(correctAnswer);

        // if (questionCount === 9) {
        //     $('.qanda-disp').empty();
        //     $('.timer').hide();
        //     $('.response-feedback').text('Your score was: ' + score);
        //     //display end-of-game img 
        // }

        if (userAnswer === correctAnswer) {
            $('.qanda-disp').empty();
            $('.timer').hide();
            $('.response-feedback').text('You got it correct!');
            score++;
            timeToNextQ();
            //show img that correlates with answer
            // setTimeout(timeToNext, 1000 * 5);
            // nextQuestion();
            // handleQandA();
        } else {
            $('.qanda-disp').empty();
            $('.timer').hide();
            $('.response-feedback').text('You got it wrong. The answer was: ' + correctAnswer);
            timeToNextQ();
            //show img 
            // setTimeout(timeToNext, 1000 * 5);
            // nextQuestion();
            // handleQandA();
        } 
    });
}

function nextQuestion() {
    // setTimeout(timeToNextQ, 1000 * 5);
    questionCount++;
    // handleQandA();
    // questionTimerRun();
    // handleResponse();
    $('.timer').show(); 
    $('.response-feedback').hide(); 
}

//could add this to if/else in handle q and a function 
function dispResults() {
        $('.qanda-disp').empty();
        $('.timer').hide();
        $('.response-feedback').text('Congratulations! Your score was: ' + score);
        //display end-of-game img 
}


function startQuiz() {
    // qTimer = 30;
    questionCount = 0;
    handleQandA();
    // questionTimerRun();
    handleResponse();
    // nextQuestion();
}

startQuiz(); 