// initial variables 
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// Display Leads on initial load if it has items in the myLeads array
if (leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage
        renderLead()
    }

// Delete button code to clear the storage and DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLead()
})

// input button click function
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead()  
    inputEl.value = ''  
})

// Display new item in myLeads array
function renderLead() {
    const listItems = myLeads.map(lead => {
        return `<li><a href="${lead}" target="_blank">${lead}</a></li>`
    })
    ulEl.innerHTML = listItems.join("")
}

 
