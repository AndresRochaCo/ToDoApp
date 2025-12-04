/// variables 

const addTaskButton = document.getElementById("button-add-task");
const taskModal = document.getElementById("taskModal");
const closeModal = document.getElementById("closeModal");

// 🔥 Open modal
addTaskButton.addEventListener("click", () => {
  taskModal.classList.remove("hidden");
  taskModal.classList.add("show");
});

// 🔥 Close modal
closeModal.addEventListener("click", () => {
  taskModal.classList.remove("show");
  taskModal.classList.add("hidden");
});

// 🔥 Optional: close when clicking outside modal box
taskModal.addEventListener("click", (event) => {
  if (event.target === taskModal) {
    taskModal.classList.remove("show");
    taskModal.classList.add("hidden");
  }
});





// Capturing user info
const submitTask = document.getElementById("submitTask");

submitTask.addEventListener("click", () => {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDesc").value;

  console.log("Task added:", title, description);
});



// generate a task box in the right panel 
submitTask.addEventListener("click", () => {
  const title = document.getElementById("taskTitle").value;
  const desc = document.getElementById("taskDesc").value;

  const taskBox = document.createElement("div");
  taskBox.classList.add("task-box");

  taskBox.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
  `;

  document.getElementById("rightTasks").appendChild(taskBox);

  // Close modal after adding
  taskModal.classList.remove("show");
  taskModal.classList.add("hidden");


  // clear the form text after adding 
  document.getElementById("taskTitle").value = "";
document.getElementById("taskDesc").value = "";
});




