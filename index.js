// initial variables 
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []

// input button click function
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLead()
    inputEl.value = ''
})

// Display new item in myLeads array
function renderLead() {
    let listItem = `<li><a href=${inputEl.value} target="_blank">${inputEl.value}</a></li>`
    ulEl.innerHTML += listItem
}

 
