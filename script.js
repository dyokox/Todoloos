const inputText = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function(){
    if (inputText.value === '') {
        alert("Cannot add empty task, please write a task.");
    } else {
        let list = document.createElement("li");
        list.innerHTML = inputText.value;
        taskContainer.appendChild(list);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        list.appendChild(span);
    }
    inputText.value = "";
    saveData();
});

taskContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

function showTasks() {
    taskContainer.innerHTML = localStorage.getItem("data");
}

showTasks();