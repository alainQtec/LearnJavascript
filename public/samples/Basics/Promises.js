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
// asyncronousAction(3000)
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((value) => {
//         console.log(value)
//     })

/*
 * The same thing can be done using async
 */
async function doAsyncAction1() {
    let isSuccess = false
    if (isSuccess) {
        return 'Action 1 was successfully completed'
    } else {
        throw 'Oops! Some error occured; action 1 Failed'
    }
}
async function doAsyncAction2() {
    try {
        let resultfromAction1 = await doAsyncAction1()
        // Do doAsyncAction2 stuff here ...
        // PROCESS resultfromAction1:
        console.log(resultfromAction1)
    } catch (error) {
        console.error(error)
        console.log('Endof doAsyncAction2')
    }
}

// doAsyncAction1()
//     .then((value) => {
//         // do stuff here ...
//         console.log(value)
//     })
//     .catch((error) => {
//         // do stuff here ...
//         console.error(error)
//     })
doAsyncAction2()
