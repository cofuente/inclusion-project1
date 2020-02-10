// jest won't error out on DOM calls.
// DOM & fetch

const getReservations = fetch("http://localhost:3000/reservations")
.then((response) => response.json()).then((data) => {
    console.log('Successfully loaded reservations:', data)
})

document.getElementById('slot').addEventListener('change', myOnChange)

document.getElementById('table').addEventListener('change', myOnChange)

document.getElementById('name').addEventListener('change', myOnChange)

document.getElementById('day').addEventListener('change', myOnChange)

document.getElementById('form').addEventListener('submit', submitFunction)
