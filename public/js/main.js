// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML)

let resData = reservationFetch.then((data) => {
    console.log('Success:', data)
})

document.getElementById('slot').onchange = function (event) {
  console.log(event.target.value)
}

document.getElementById('table').onchange = function (event) {
  console.log(event.target.value)
}

function nameChange(event) {
  console.log(event.target.value)
}

document.getElementById('name').addEventListener('change', nameChange)


document.getElementById('day').addEventListener('change', nameChange)

// document.getElementById('name').addEventListener('submit', submitFunction)


function submitFunction(event) {
  event.preventDefault()
//   const msg = document.getElementById('time').value
  console.log(event.target.value)
  console.log(proposedReservation)
}
