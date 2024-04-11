
fetch("https://restcountries.com/v3.1/name/russia")
    .then(res=>res.json())
    .then(data=>console.log(data))


    // assynchronous code in js