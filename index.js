// initial variables 
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = []

// input button click function
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
})
