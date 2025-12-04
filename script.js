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




