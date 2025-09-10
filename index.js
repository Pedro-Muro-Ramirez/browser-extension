// initial variables 
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// Display Leads on initial load if it has items in the myLeads array
if (leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage
        render(myLeads)
    }

// Delete button code to clear the storage and DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// tabBtn function to display the current tab URL
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

// input button click function
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)  
    inputEl.value = ''  
})

// Display new item in myLeads array
function render(leads) {
    const listItems = leads.map(lead => {
        return `<li><a href="${lead}" target="_blank">${lead}</a></li>`
    })
    ulEl.innerHTML = listItems.join("")
}

 
