// import { userInfo, tmpdir } from 'os' // then I'll be able to use `${os.userInfo().username}` intead of 'Anonymous'
// import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs'
// import { join } from 'path'

class Quiz {
    static difLevels = ['Easy', 'Medium', 'Hard']
    static categories = [
        'Cloud',
        'Linux',
        'Docker',
        'DevOps',
        'Kubernetes',
        'Networking',
        'Programming',
    ]
    #userName = 'Anonymous'
    #uid = ''
    #api = {
        url: 'https://quizapi.io',
        Endpoint: 'api/v1/questions',
        // TODO: I'll address the token security issue: ( Keep it as a GitHub ENV secret or somethin) as of now, it is only for demo purposes.
        Key: 'DVW47I8SqIa0OzKQZtEKribOclK75YnZtWh3L8lz',
        // ! Not a secure way to do this; but : https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/
        // Please don't abuse this token or the monthly Quota will be exceded. (get your own apikey)
    }
    constructor(category, level) {
        this.questions = []
        this.category =
            typeof category == 'undefined' || category === ''
                ? Quiz.categories[
                      Math.floor(Math.random() * Quiz.categories.length)
                  ]
                : category
        this.level =
            typeof level == 'undefined' || level === ''
                ? Quiz.difLevels[
                      Math.floor(Math.random() * Quiz.difLevels.length)
                  ]
                : level
        this.#uid = `${this.getUID()}` // Unique ID. has to be set only once when the test starts
        this.score = 0 // Marks
        this.questionTime = 15 //15 seconds
        this.questionIndex = 0
        this.startBtn = document.querySelector('.start-btn')
        this.nextBtn = document.querySelector('.next-btn')
        this.closeBtn = document.querySelector('.close-btn')
        this.contentBox = document.querySelector('.container')
        this.questionContainer = document.querySelector('#question-container')
    }
    // Start the Quiz
    start() {
        this.setQuestions().then(() => {
            console.log('Starting the Quiz session ..')
            this.displayStartMessage()
                .then(() => {
                    console.log('Save state ..')
                    // this.saveState() // before anything goes wrong
                })
                .catch((err) => console.error(err))
                .finally(() => {
                    console.log(`set ${this.questions.length} question(s).`)
                })
                .then(() => {
                    this.startBtn.addEventListener('click', (e) => {
                        e.preventDefault() // Prevent the  page from refeshing ar any suspicious tricks (&so we wont loose any Data).
                        console.log('start btn licked:', this.questions)
                        setTimeout(() => {
                            this.nextBtn.classList.remove('hide')
                        }, 700)
                        this.startBtn.classList.add('hide')
                        this.closeBtn.classList.remove('hide')
                        this.closeBtn.addEventListener('click', (e) => {
                            e.preventDefault()
                            this.end()
                        })
                        this.displayQuestions().catch((e) => {
                            console.log(e)
                        })
                    })
                })
                .catch((err) => {
                    // catch errors like when the user cancels the plagiarism agreement or clicks the closeBtn or other stuff
                    this.end(err)
                })
        })
    }
    // resumes a test session. But since there is no pause button, this should only be auto- invoked when an unexpected error has caused the session to close abruptly.
    // For situations such as when your computer unexpectedly shuts down before the Quiz is finished.
    resume(quizUid) {
        if (quizUid) {
            // 1. check if there is a saved state with that uid
            //  ...

            // 2. loadstate
            this.#loadState(quizUid)
        }
        //  3. Resume (Timer Countdown)
        // ...
    }

    // returns a unique id for the quiz session
    getUID() {
        if ((this.#uid && this.#uid.length == 0) || this.#uid === '') {
            var d = new Date().getTime() //Timestamp
            var d2 =
                (typeof performance !== 'undefined' &&
                    performance.now &&
                    performance.now() * 1000) ||
                0 //Time in microseconds since page-load or 0 if unsupported
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                (c) => {
                    var r = Math.random() * 16 //random number between 0 and 16
                    if (d > 0) {
                        //Use timestamp until depleted
                        r = (d + r) % 16 | 0
                        d = Math.floor(d / 16)
                    } else {
                        r = (d2 + r) % 16 | 0
                        d2 = Math.floor(d2 / 16)
                    }
                    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
                },
            )
        } else {
            return this.#uid
        }
    }

    async fetchQuestions(
        difficulty = this.level,
        count = this.questions.length, // Number of questions to ask
    ) {
        if (Number.isNaN(count)) {
            throw 'Please enter a valid number'
        }
        var fullUrl = `${this.#api.url}/${this.#api.Endpoint}`
        var options = {
            method: 'GET',
            category: this.category,
            difficulty: difficulty,
            limit: Number.parseInt(count),
            headers: {
                'X-Api-Key': `${this.#api.Key}`,
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

    async setQuestions() {
        let jsonResult = await this.fetchQuestions()
        if (typeof jsonResult === 'undefined') {
            throw console.error('Err while fetching questions json')
        } else {
            jsonResult.forEach((el) => {
                this.questions.push(new Question(el))
            })
        }
        // console.log('fetching question (Not really. for now ...)')
    }

    // display some popup modal like: "Once you click start there is no pause, ... agree no plagiarism, and stuff..." then if the user clicks `I agree`. display questions and start the timer.
    async displayStartMessage() {
        this.contentBox.style.width = '60rem'
        this.closeBtn.addEventListener('click', () => {
            this.questionContainer.classList.add('hide')
        })
        console.log('displayStartMessage, runs ..')
    }
    async displayQuestions() {
        if (
            typeof this.questions == 'undefined' ||
            this.questions.length == 0
        ) {
            throw 'Undefined or Invalid questions array'
        }
        this.contentBox.style.width = '80rem'
        this.questionContainer.classList.remove('hide')
        while (this.questionIndex > 0) {
            this.questions[this.questionIndex].show()
            this.questionIndex++
        }
    }

    // [Offline support]
    saveState() {
        // SaveState on local drive to prevent progress loss when the pc accidently shutsdown or internet cuts off before the answer was yet sent to server.
        const tmpDir = join(tmpdir(), this.#uid)
        const tmpFile = join(tmpDir, `${this.#userName}.tmp`)
        if (!existsSync(tmpDir)) {
            mkdirSync(tmpDir)
        }
        try {
            writeFileSync(tmpFile, JSON.stringify(this))
        } catch (err) {
            console.error(err)
        } finally {
            console.log('Savestate complete. Saved to:', tmpFile)
        }
    }

    // [Offline support]
    // loadstate from another saved session uid without cheking stuff. Mainly used by the resume() method
    #loadState(uid) {
        try {
            if (typeof uid == 'undefined' || uid === '') {
                throw 'Invalid uid. Unable to loadState.'
            }
            let tmpFile = join(tmpdir(), uid, `${this.#userName}.tmp`)
            let obj = JSON.parse(readFileSync(tmpFile, 'utf8'))
            this.#uid = obj.uid
            this.#userName = obj.userName
            this.category = obj.category
            this.questions = obj.questions
            this.questionIndex = obj.questionIndex
            this.level = obj.level
            this.score = obj.score
        } catch (err) {
            return console.error(err)
        }
    }

    // Checks if the quiz is done.
    isCompleted() {
        return this.questionIndex === this.questions.length
    }

    end(err) {
        this.questionIndex = this.questions.length
        this.startBtn.classList.remove('hide')
        this.closeBtn.classList.add('hide')
        this.nextBtn.classList.add('hide')
        this.contentBox.style.width = '18rem'
        return console.log('Ending the Quiz session. reason:', err)
    }
}

class Question {
    constructor(q) {
        this.id = q.id
        this.text = q.question
        this.description = q.description
        this.answers = q.answers
        this.hasMultipleAnswers = q.multiple_correct_answers
        this.choices = q.correct_answers
        this.correct_answer = q.correct_answer
        this.explanation = q.explanation
        this.tip = q.tip
        this.time = 15 // seconds
        this.tags = q.tags
        this.category = q.category
        this.difficulty = q.difficulty
    }
    #getCorrectAnswer(answers) {}
    show() {
        let c = document.getElementById('question-container')
        let q = document.createElement('div')
        let t = document.createElement('h1')
        let d = document.createElement('p')
        t.classList.add('question-title')
        t.innerText = this.text
        d.classList.add('question-description')
        d.innerText = this.description
        q.id = this.id
        q.classList.add('question')
        q.appendChild(t)
        q.appendChild(d)
        c.appendChild(q)
        document.querySelector('.container').appendChild(c)
        // start a timer that will invoke hide() the question when it ends ..
    }
    hide() {
        // when the time is expired ...
    }
    // What kind of methods should this have ?!
}

function generateElements(html) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    return template.content.children
}
function scrollLeft(el, value) {
    if (value === undefined) {
        return el.pageXOffset
    } else {
        if (el === window || el.nodeType === 9) {
            el.scrollTo(value, el.pageYOffset)
        } else {
            el.pageXOffset = value
        }
    }
}
function wrap(el) {
    const wrappingElement = document.createElement('div')
    el.replaceWith(wrappingElement)
    wrappingElement.appendChild(el)
}
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn()
    } else {
        document.addEventListener('DOMContentLoaded', fn)
    }
}

/*  Trigger an event
    Ex:
    trigger(el, 'focus')
    // For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/Event
    trigger(el, new PointerEvent('pointerover'))
*/
function trigger(el, eventType) {
    if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
        el[eventType]()
    } else {
        const event =
            eventType === 'string'
                ? new Event(eventType, { bubbles: true })
                : eventType
        el.dispatchEvent(event)
    }
}

function isNumeric(num) {
    if (typeof num === 'number') return num - num === 0
    if (typeof num === 'string' && num.trim() !== '')
        return Number.isFinite(+num)
    return false
}

// parseHTML(htmlString)
function parseHTML(str) {
    const tmp = document.implementation.createHTMLDocument('')
    tmp.body.innerHTML = str
    return [...tmp.body.childNodes]
}
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1
    var element = document.getElementById('progress')
    element.innerHTML =
        'Question ' + currentQuestionNumber + ' of ' + quiz.questions.length
}
function showScores() {
    var gameOverHTML = '<h1>Result</h1>'
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + '</h2>'
    var element = document.getElementById('quiz')
    element.innerHTML = gameOverHTML
}

//Event Listeners
const quiz = new Quiz()
quiz.start()
