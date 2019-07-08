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
function handleQAndA() {
    let qtemplate = `<div class='question-template'>
    
    <h2>${quiz[0].question}</h2>

    <form>
    <fieldset>
    
    <label class='answer-choices'>
    <input type='radio' name='answer-option' value='${quiz[0].answers[0]}'>
    <span>${quiz[0].answers[0]}</span>
    </label>

    <label class='answer-choices'>
    <input type='radio' name='answer-option' value='${quiz[0].answers[1]}'>
    <span>${quiz[0].answers[1]}</span>
    </label>

    <label class='answer-choices'>
    <input type='radio' name='answer-option' value='${quiz[0].answers[2]}'>
    <span>${quiz[0].answers[2]}</span>
    </label>

    <label class='answer-choices'>
    <input type='radio' name='answer-option' value='${quiz[0].answers[3]}'>
    <span>${quiz[0].answers[3]}</span>
    </label>
    
    </fieldset>
    </form>
    </div>`;

    $('.qanda-disp').append(qtemplate);
}

handleQAndA();

function handleResponse()  {

}

