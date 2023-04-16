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
    yearText.innerHTML = year - inputYear.value
    monthText.innerHTML = month + 1 - inputMonth.value
    dayText.innerHTML = day - inputDay.value

})