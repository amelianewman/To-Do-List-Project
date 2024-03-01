let tasks = []

// generating a random number to be assigned to the tasks
function generateId() {
  return Math.floor(Math.random() *1000); 
}

// function for task input
function addTask(description){
  if (description) {
    let task= {
      id: generateId(),
      description: description,
      completed: false, 
    }
    tasks.push(task);
    document.getElementById("new-task").value = ""
  } else {
    alert("😠Please enter a task!😠")
    console.log("user needs to submit a task") 
  } 
}

// this function displays the new created tasks on the HTML page
let input = document.getElementById("new-task")
let btn = document.getElementById("add-btn")

btn.addEventListener("click", function() {
  addTask(input.value)
  displayTasks()
})

// function for toggling task completion by id (toggles the completion status of a task by its id.)
function toggleTask(id) {
  let task = tasks.find(task => task.id === id)
  if (task) {
    task.completed = !task.completed
    console.log("task completed") 
  }
}

// function to delete tasks by id
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id)
  console.log("task deleted")
}

// function to display tasks in unordered list
function displayTasks() {
  let ul = document.getElementById("task-ul")
  ul.innerHTML = ""
  
  for (let task of tasks) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task.description))
    li.setAttribute("id", task.id)
    
    // this function creates a bin icon and links to the list 
    let bin = document.createElement("span")
    bin.innerHTML = "🗑️"
    bin.setAttribute("class", "bin-icon")
    bin.setAttribute("alt", "delete task")
    li.appendChild(bin);
    
    // fucntion which enables the user to delete by clicking on the bin icon 
    bin.addEventListener("click", function() {
      deleteTask(task.id);
      displayTasks();
    })

    // this function creates a check icon and links to the list 
    let check = document.createElement("span")
    check.innerHTML = "✅";
    check.setAttribute("class", "check-icon")
    check.setAttribute("alt", "complete task")
    li.appendChild(check)
    
    // this function for the checkmark toggle the task as completed 
    check.addEventListener("click", function() {
      toggleTask(task.id);
      displayTasks();
    })
    
    // if task is completed, a strikethrough is added
    if (task.completed) {
      li.classList.add("strikethrough");
    }
    ul.appendChild(li)
  }
}

// collapsible/ accordion feature 
const coll = document.getElementsByClassName("collapsible");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// random act of kindness suggestion feature- creating an array
const act_list = [
  "Reach out to a friend you haven't spoken to for a while",
  "Send a handwritten letter ",
  "Offer to babysit for a friend",
  "Make someone laugh",
  "Bake a cake for your colleagues",
  "Tell someone you know why you are thankful for them",
  "Send flowers to a friend",
  "Spend time playing with your pet",
  "Smile at five strangers",
  "Run an errand for a friend who is busy",
  "Email or write to a former teacher who made a difference in your life",
  "Make someone a cup of tea",
];

//  function to randomly choose an act of kindness
function calculateRandom() {
  const randomIndex = Math.floor(Math.random() * act_list.length);
  return act_list[randomIndex];
}

// Function to print random acts of kindness on page
function generateOptions() {
  const kindnessList = document.getElementById("kindness-list");
  kindnessList.innerHTML = "";
  const kindness = calculateRandom();
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(kindness));
  kindnessList.appendChild(li);
}