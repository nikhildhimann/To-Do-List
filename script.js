// Get elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on page load
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.splice(index, 1); // Remove task at index
      localStorage.setItem('tasks', JSON.stringify(tasks));
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Add task on button click
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const index = tasks.indexOf(taskText); // Find index of task
      if (index !== -1) {
        tasks.splice(index, 1); // Remove task
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Save to localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = "";
  }
});

// Add task on Enter key
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

// Initialize tasks from localStorage
loadTasks();
