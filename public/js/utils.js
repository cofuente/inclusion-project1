// process Data
// // define your functions like this so they're testable
// function sum (num1, num2) {
//   return num1 + num2
// }

function submitFunction(event) {
    event.preventDefault()
    console.log('we fired here----->', event)
}

function myOnChange(event) {
    console.log(event.target.value)
}