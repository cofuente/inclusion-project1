// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML)

let resData = reservationFetch.then((data) => {
    console.log('Success:', data)
})