
const form = document.querySelector('#task-form form');
const taskInput = document.getElementById('task-title');
const details = document.getElementById('task-details');
const date = document.getElementById('task-due-date');
const taskList = document.querySelector('#task-list ul');
const editIndex = { value: null };
const confirmDialog = document.getElementById('confirm-dialog');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
const tasks = [];
const taskForm = document.getElementById("task-form");


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const newTask = {
        title: taskInput.value,
        description: details.value,
        dueDate: date.value,
        completed: editIndex.value !== null ? tasks[editIndex.value].completed : false
    };

    if (editIndex.value !== null) {
        // Update an existing task
        tasks[editIndex.value] = newTask;
        editIndex.value = null; // Reset edit index
    } else {
        // Add a new task
        tasks.push(newTask);
    }

    // Display tasks and reset the form
    displayTask();
    form.reset();
    taskForm.style.display = "none"; // Hide the task form after adding or editing a task
});

// Function to display tasks
function displayTask() {
    taskList.innerHTML = ''; // Clear existing task list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task-card');

        // Create and append content for the task
        const title = document.createElement('h3');
        title.textContent = `Title: ${task.title}`;
        li.appendChild(title);

        const description = document.createElement('p');
        description.textContent = `Description: ${task.description}`;
        li.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.textContent = `Due Date: ${task.dueDate}`;
        li.appendChild(dueDate);

        // Create and append the completion button (checkmark icon)
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('complete-button'); // Add class for styling
        toggleButton.innerHTML = task.completed ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>';
        toggleButton.addEventListener('click', () => toggleTaskCompletion(index));
        li.appendChild(toggleButton);

        // Create and append the Edit button (pencil icon)
        const editButton = document.createElement('button');
        editButton.classList.add('edit-button'); // Add class for styling
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.addEventListener('click', () => populateForm(index));
        li.appendChild(editButton);

        // Create and append the Delete button (trash icon)
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button'); // Add class for styling
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', () => showConfirmDialog(index));
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);
    });
}

// Function to populate the form with task details for editing
function populateForm(index) {
    const task = tasks[index];
    taskInput.value = task.title;
    details.value = task.description;
    date.value = task.dueDate;
    editIndex.value = index; // Set the index of the task being edited
    taskForm.style.display = "block"; // Show the task form for editing
}

// Toggle task completion status
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTask(); // Update the displayed task list
}

// Show confirmation dialog for task deletion
function showConfirmDialog(index) {
    confirmDialog.classList.remove('hidden'); // Show the dialog
    confirmYes.onclick = () => {
        tasks.splice(index, 1);
        displayTask();
        confirmDialog.classList.add('hidden'); // Hide the dialog after deleting the task
    };
    confirmNo.onclick = () => {
        confirmDialog.classList.add('hidden'); // Hide the dialog without removing the task
    };
}

// Toggle task form visibility
document.getElementById("add-task-button").addEventListener('click', function() {
    taskForm.style.display = taskForm.style.display === "none" || taskForm.style.display === "" ? "block" : "none";
});

// Initial display of tasks
displayTask();
