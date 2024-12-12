const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task-button");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Inserisci un task valido!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    taskSpan.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
});