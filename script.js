const taskInput = document.getElementById("new-task");
const taskList = document.querySelector(".tasks");
let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({ task: taskText });
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${task.task}</td>
      <td>
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </td>`;
    taskList.appendChild(row);
  });
}

function editTask(index) {
  const newTask = prompt("Edit your task:", tasks[index].task);
  if (newTask) {
    tasks[index].task = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

document.getElementById("add-task-btn").addEventListener("click", addTask);
