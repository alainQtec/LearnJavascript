// Example of the returned question
var ob = {
    id: 720,
    text: 'Cronjobs in kubernetes run in',
    description: null,
    answers: {
        answer_a: 'UTC only',
        answer_b: 'Based on NTP settings',
        answer_c: 'Master node local timezone',
        answer_d: 'GMT only',
        answer_e: null,
        answer_f: null,
    },
    hasMultipleAnswers: 'false',
    choices: {
        answer_a_correct: 'true',
        answer_b_correct: 'false',
        answer_c_correct: 'false',
        answer_d_correct: 'false',
        answer_e_correct: 'false',
        answer_f_correct: 'false',
    },
    correct_answer: 'answer_a',
    explanation: null,
    tip: null,
    tags: [
        {
            name: 'Kubernetes',
        },
    ],
    category: 'Linux',
    difficulty: 'Easy',
}
/*
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isCompleted()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

*/
