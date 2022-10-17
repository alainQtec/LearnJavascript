// Copyright 2022 alainQtec
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as fs from 'fs'
const URL = 'https://quizapi.io'
const QUIZ_ENDPOINT = 'api/v1/questions'
const API_KEY = 'DVW47I8SqIa0OzKQZtEKribOclK75YnZtWh3L8lz' // !! Not a secure way to do this !!
const difLevels = ['Easy', 'Medium', 'Hard']
const CATEGORIES = [
    'Linux',
    'DevOps',
    'Networking',
    'Programming',
    'Cloud',
    'Docker',
    'Kubernetes',
]
const getQuestions = async (
    difficulty = difLevels[Math.floor(Math.random() * difLevels.length)],
    count = 5,
) => {
    if (Number.isNaN(count)) {
        throw 'Please enter a valid number'
    }
    var limit = Number.parseInt(count)
    var category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
    var options = {
        method: 'GET',
        limit: limit, //numberOfQuestions
        category: category,
        difficulty: `${difficulty}`,
        // tags: `${tags}`,
        limit: 10,
        headers: {
            'X-Api-Key': `${API_KEY}`,
        },
    }
    fetch(`${URL}/${QUIZ_ENDPOINT}`, options)
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)))
        .catch((err) => console.error(err))
}

// http://crocodillon.com/blog/always-catch-localstorage-security-and-quota-exceeded-errors
// Example: Handle QuotaExceededError
// try {
//     localStorage.setItem(key, value)
// } catch (e) {
//     if (isQuotaExceeded(e)) {
//         // Storage full, maybe notify user or do some clean-up
//     }
// }
function isQuotaExceeded(e) {
    var quotaExceeded = false
    if (e) {
        if (e.code) {
            switch (e.code) {
                case 22:
                    quotaExceeded = true
                    break
                case 1014:
                    // Firefox
                    if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                        quotaExceeded = true
                    }
                    break
            }
        } else if (e.number === -2147024882) {
            // Internet Explorer 8 (very unlikely)
            quotaExceeded = true
        }
    }
    return quotaExceeded
}
function outFile(path, stringifiedObj) {
    fs.writeFile(path, JSON.stringify(stringifiedObj), (err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log('The file was saved!')
        }
    })
}
// getQuestions()
// outFile(%home%)
