// Asyncronous javascript using promises
const asyncronousAction = (time) =>
    new Promise((resolve, reject) => {
        let hasFailed = time % 3 > 0 // you can do other real operation here (like invoking a function)
        !hasFailed
            ? setTimeout(
                  resolve('The Operation was a succes. Thanks for Waiting.'),
                  time,
              )
            : setTimeout(
                  reject('The operatio Has Failed! Thanks for Waiting.'),
                  time,
              )
    })
asyncronousAction(3000)
    .then((value) => {
        console.log(value)
    })
    .catch((value) => {
        console.log(value)
    })
