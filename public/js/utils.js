// // define your functions like this so they're testable
// function sum (num1, num2) {
//   return num1 + num2
// }
const reservationFetch = fetch("http://localhost:3000/reservations")
.then((response) => response.json())