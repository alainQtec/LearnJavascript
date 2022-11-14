const start_btn = document.querySelector('.start_btn button')
const info_box = document.querySelector('.info_box')
const exit_btn = info_box.querySelector('.buttons .quit')
const continue_btn = info_box.querySelector('.buttons .restart')
const quiz_box = document.querySelector('.quiz_box')
const result_box = document.querySelector('.result_box')
const option_list = document.querySelector('.option_list')
const time_line = document.querySelector('header .time_line')
const timeText = document.querySelector('.timer .time_left_txt')
const timeCount = document.querySelector('.timer .timer_sec')
const difLevels = ['Easy', 'Medium', 'Hard']
const categories = [
    'Cloud',
    'Linux',
    'Docker',
    'DevOps',
    'Kubernetes',
    'Networking',
    'Programming',
]
var questions = []

async function fetchQuestions(
    difficulty = difLevels[Math.floor(Math.random() * difLevels.length)],
) {
    var fullUrl = 'https://quizapi.io/api/v1/questions'
    var options = {
        method: 'GET',
        category: categories[Math.floor(Math.random() * categories.length)],
        difficulty: difficulty,
        limit: 5,
        headers: {
            // TODO: I'll address the token security issue: ( Keep it as a GitHub ENV secret or somethin) as of now, it is only for demo purposes.
            'X-Api-Key': 'DVW47I8SqIa0OzKQZtEKribOclK75YnZtWh3L8lz',
            // ! Not a secure way to do this; but : https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/
            // Please don't abuse this token or the monthly Quota will be exceded. (get your own apikey)
        },
    }
    var questions = await fetch(fullUrl, options)
        .then((response) => {
            // convert to JSON first
            return response.json()
        })
        .catch((err) => console.error(err))
    return questions
}

start_btn.onclick = async () => {
    console.log('starting')
    info_box.classList.add('activeInfo') //show info box
    questions = await this.fetchQuestions()
    console.log('fetched questions:', questions)
}

exit_btn.onclick = () => {
    info_box.classList.remove('activeInfo') //hide info box
}

continue_btn.onclick = () => {
    info_box.classList.remove('activeInfo') //hide info box
    quiz_box.classList.add('activeQuiz') //show quiz box
    showQuetions(0) //calling showQestions function
    queCounter(1) //passing 1 parameter to queCounter
    startTimer(15) //calling startTimer function
    startTimerLine(0) //calling startTimerLine function
}

let timeValue = 15
let qCount = 0
let que_numb = 1
let userScore = 0
let counter
let counterLine
let widthValue = 0

const restart_quiz = result_box.querySelector('.buttons .restart')
const quit_quiz = result_box.querySelector('.buttons .quit')

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add('activeQuiz')
    result_box.classList.remove('activeResult')
    timeValue = 15
    qCount = 0
    que_numb = 1
    userScore = 0
    widthValue = 0
    showQuetions(qCount)
    queCounter(que_numb)
    clearInterval(counter)
    clearInterval(counterLine)
    startTimer(timeValue)
    startTimerLine(widthValue)
    timeText.textContent = 'Time Left'
    nextBtn.classList.remove('show')
}

quit_quiz.onclick = () => {
    window.location.reload() //reload the current window
}

const nextBtn = document.querySelector('footer .nextBtn')
const bottom_ques_counter = document.querySelector('footer .total_que')

nextBtn.onclick = () => {
    if (qCount < questions.length - 1) {
        qCount++
        que_numb++
        showQuetions(qCount)
        queCounter(que_numb)
        clearInterval(counter)
        clearInterval(counterLine)
        startTimer(timeValue)
        startTimerLine(widthValue)
        timeText.textContent = 'Time Left'
        nextBtn.classList.remove('show')
    } else {
        clearInterval(counter)
        clearInterval(counterLine)
        showResult()
    }
}
function showQuetions(index) {
    const questionText = document.querySelector('.questionText')
    let que_tag =
        '<span>' +
        questions[index].id +
        '. ' +
        questions[index].question +
        '</span><span>' +
        questions[index].description +
        '</span></br>'
    let option_tag =
        '<div class="option"><span>' +
        questions[index].answers['answer_a'] +
        '</span></div>' +
        '<div class="option"><span>' +
        questions[index].answers['answer_b'] +
        '</span></div>' +
        '<div class="option"><span>' +
        questions[index].answers['answer_c'] +
        '</span></div>' +
        '<div class="option"><span>' +
        questions[index].answers['answer_d'] +
        '</span></div>' +
        '<div class="option"><span>' +
        questions[index].answers['answer_e'] +
        '</span></div>'
    questionText.innerHTML = que_tag
    option_list.innerHTML = option_tag

    const option = option_list.querySelectorAll('.option')
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
}
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>'

function optionSelected(answer) {
    clearInterval(counter)
    clearInterval(counterLine)
    let userAns = answer.textContent
    let correcAns = questions[qCount].answer
    const allOptions = option_list.children.length

    if (userAns == correcAns) {
        userScore += 1
        answer.classList.add('correct')
        answer.insertAdjacentHTML('beforeend', tickIconTag)
        console.log('Correct Answer')
        console.log('Your correct answers = ' + userScore)
    } else {
        answer.classList.add('incorrect')
        answer.insertAdjacentHTML('beforeend', crossIconTag)
        console.log('Wrong Answer')

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) {
                option_list.children[i].setAttribute('class', 'option correct')
                option_list.children[i].insertAdjacentHTML(
                    'beforeend',
                    tickIconTag,
                )
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled')
    }
    nextBtn.classList.add('show')
}

function showResult() {
    info_box.classList.remove('activeInfo')
    quiz_box.classList.remove('activeQuiz')
    result_box.classList.add('activeResult')
    const scoreText = result_box.querySelector('.score_text')
    if (userScore > 3) {
        let scoreTag =
            '<span>and congrats! , You got <p>' +
            userScore +
            '</p> out of <p>' +
            questions.length +
            '</p></span>'
        scoreText.innerHTML = scoreTag
    } else if (userScore > 1) {
        let scoreTag =
            '<span>and nice , You got <p>' +
            userScore +
            '</p> out of <p>' +
            questions.length +
            '</p></span>'
        scoreText.innerHTML = scoreTag
    } else {
        let scoreTag =
            '<span>and sorry , You got only <p>' +
            userScore +
            '</p> out of <p>' +
            questions.length +
            '</p></span>'
        scoreText.innerHTML = scoreTag
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        timeCount.textContent = time
        time--
        if (time < 9) {
            let addZero = timeCount.textContent
            timeCount.textContent = '0' + addZero
        }
        if (time < 0) {
            clearInterval(counter)
            timeText.textContent = 'Time Off'
            const allOptions = option_list.children.length
            let correcAns = questions[qCount].answer
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) {
                    option_list.children[i].setAttribute(
                        'class',
                        'option correct',
                    )
                    option_list.children[i].insertAdjacentHTML(
                        'beforeend',
                        tickIconTag,
                    )
                    console.log('Time Off: Auto selected correct answer.')
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add('disabled')
            }
            nextBtn.classList.add('show')
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29)
    function timer() {
        time += 1
        time_line.style.width = time + 'px'
        if (time > 549) {
            clearInterval(counterLine)
        }
    }
}

function queCounter(index) {
    let totalQueCounTag =
        '<span><p>' +
        index +
        '</p> of <p>' +
        questions.length +
        '</p> Questions</span>'
    bottom_ques_counter.innerHTML = totalQueCounTag
}
