const inputYear = document.querySelector("#year")
const inputMonth = document.querySelector("#month")
const inputDay = document.querySelector("#day")
const actualDate = new Date()
const year = actualDate.getFullYear()
const yearText = document.querySelector(".yearsText")
const month = actualDate.getMonth()
const monthText = document.querySelector(".monthsText")
const day = actualDate.getDate()
const dayText = document.querySelector(".daysText")

const buttonSubmit = document.querySelector(".arrowSVG")



buttonSubmit.addEventListener("click", () => {
    let birthDate = new Date(inputMonth.value+"-"+inputDay.value+"-"+inputYear.value);  

    let differenceInMilliseconds = actualDate.getTime() - birthDate.getTime();
            
    let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;

    yearText.textContent =  Math.floor(differenceInMilliseconds / millisecondsPerYear);

    let millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44;

    monthText.textContent = Math.floor((differenceInMilliseconds % millisecondsPerYear) / millisecondsPerMonth);

    let millisecondsPerDay = 1000 * 60 * 60 * 24; 

    dayText.textContent = Math.floor((differenceInMilliseconds % millisecondsPerMonth) / millisecondsPerDay);

})