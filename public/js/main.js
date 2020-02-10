// jest won't error out on DOM calls.
// DOM & fetch

const getReservations = fetch("http://localhost:3000/reservations")
.then((response) => response.json()).then((data) => {
    console.log('Successfully loaded reservations:', data)
})

document.getElementById('slot').onchange = function (event) {
  console.log(event.target.value)
}

document.getElementById('table').onchange = function (event) {
  console.log(event.target.value)
}

document.getElementById('name').addEventListener('change', nameChange)


document.getElementById('day').addEventListener('change', nameChange)

document.getElementById('form').addEventListener('submit', submitFunction)
