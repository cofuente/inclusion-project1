// process Data
// // define your functions like this so they're testable
// function sum (num1, num2) {
//   return num1 + num2
// }
import '../node_modules/pikaday/css/pikaday.css'
import Pickaday from 'pikaday'
import getMoment from 'moment'


const picker = new Pikaday({
    field: document.getElementById('day'),
    format: 'D MMM YYYY',
    onSelect: function () {
      console.log(this.getMoment().format('Do MMMM YYYY'))
    }
  })

function submitFunction(event) {
    event.preventDefault()
    console.log('we fired here----->', event)
}

function myOnChange(event) {
    console.log(event.target.value)
}