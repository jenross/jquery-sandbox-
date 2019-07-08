let qtemplate = '';
let intervalId;
let qTimer = 30;
let questionCount = 0; 
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
}

// handleQandA();
// questionTimerRun();
// handleResponse();

function questionTimerRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    qTimer--;
    $('.timer').text(qTimer);
    if (qTimer === 0) {
        clearInterval(intervalId);
        // handleResponse();
    }
}

function timeToNext() {
    console.log("5 seconds");
}

//answer correct or incorrect, img and message displayed
function handleResponse()  {
    $('.submit-btn').on('click', function (event){
        event.preventDefault();
        let userAnswer = $('input:checked').val();
        console.log(userAnswer);
        let correctAnswer = `${quiz[questionCount].correctAnswer}`;
        console.log(correctAnswer);
        if (userAnswer === correctAnswer) {
            $('.qanda-disp').empty();
            $('.response-feedback').text('You got it correct!');
            //show img that correlates with answer
            setTimeout(timeToNext, 1000 * 5);
        } else {
            $('.qanda-disp').empty();
            $('.response-feedback').text('You got it wrong. The answer was: ' + correctAnswer);
            //show img 
            setTimeout(timeToNext, 1000 * 5);
        }
    });
}

function nextQuestion() {
    questionCount++;
    // handleQandA();
    // questionTimerRun();
    // handleResponse();
}

function startQuiz() {
    // qTimer = 30;
    questionCount = 0;
    handleQandA();
    questionTimerRun();
    handleResponse();
    // nextQuestion();
}

startQuiz(); 