
fetch("https://restcountries.com/v3.1/region/africa")
    .then(res=>res.json())
    .then(data=>console.log(data))


    // assynchronous code in js