const inputBox = document.getElementById("input-box");
const tasks = document.getElementById("tasks");

function addTask() {
    if(inputBox.value === '')
        {
            alert("Please! Enter something!")
        }
    else{
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        tasks.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        listItem.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

inputBox.addEventListener('keypress', handleKeyPress);

tasks.addEventListener("click", function(del){
    if(del.target.tagName === "LI"){
        del.target.classList.toggle("checked");
        saveData();
    }
    else if(del.target.tagName === "SPAN"){
        del.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', tasks.innerHTML);
}
function displayData(){
    tasks.innerHTML = localStorage.getItem("data");
}
displayData();