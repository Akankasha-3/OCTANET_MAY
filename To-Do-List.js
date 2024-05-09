function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.innerHTML = taskText + ' <button onclick="markAsComplete(this)">Complete</button>';
        taskList.appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function markAsComplete(button) {
    button.parentNode.classList.toggle("completed");
}