// process Data
// // define your functions like this so they're testable
// function sum (num1, num2) {
//   return num1 + num2
// }
function submitFunction(event) {
    event.preventDefault()
    console.log('----->', event)
}

function nameChange(event) {
    console.log(event.target.value)
}