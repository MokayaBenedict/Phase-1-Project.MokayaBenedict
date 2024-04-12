
let tasks = [];  
// empty area for tasks to be done

function addTask() {   
    let taskDescription = document.getElementById("taskInput").value.trim();
    let timeOfCompletion = document.getElementById("timeInput").value;

    if (taskDescription === "") {
        alert("Please enter a task description.");
        return;
    }
    if (timeOfCompletion === "") {
        alert("Please enter a specified time");
        return;
    }
// checks if no valuaes are imputed and returns an alert
    let taskItem = document.createElement("li");
    taskItem.textContent = `${taskDescription} - Time of completion: ${timeOfCompletion}`;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            taskItem.style.textDecoration = "line-through";
        } else {
            taskItem.style.textDecoration = "none";
        }
    });
    taskItem.appendChild(checkbox);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button"; 
    deleteButton.addEventListener("click", function() {
        taskItem.remove();
        tasks = tasks.filter(task => task.description !== taskDescription);
    });
    taskItem.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(taskItem);

    tasks.push({ description: taskDescription, time: timeOfCompletion });
    document.getElementById("taskInput").value = "";
    document.getElementById("timeInput").value = "";
}
