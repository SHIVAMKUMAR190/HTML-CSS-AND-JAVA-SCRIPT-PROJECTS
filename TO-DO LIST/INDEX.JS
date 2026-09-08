let input = document.querySelector("#input-items");
let btn = document.querySelector("#btn");
let items = document.querySelector("#items");
let deletebtn = document.querySelector("#btn1");
let saveBtn = document.querySelector("#saveBtn");
let task = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex;

showTasks();

function todo() {
    let inputtag = input.value.trim();

    if (inputtag === "") {
        return;
    }

    task.push(inputtag);
    localStorage.setItem("tasks", JSON.stringify(task));
    showTasks();
    input.value = "";
}

function showTasks() {
    items.innerHTML = "";

    for (let i = 0; i < task.length; i++) {
       
        items.innerHTML += `
        <div class="task-item">
            <div class="task">${task[i]}</div>
            <button class="btn2" onclick="clearone(${i})">DELETE ONE</button>
        <button class="edit" onclick="edit(${i})">EDIT</button></div>`;
    }
}

function clear() {
    localStorage.removeItem("tasks");
    task = [];
    showTasks();
}

function clearone(index) {
    task.splice(index, 1); 
    localStorage.setItem("tasks", JSON.stringify(task)); 
    showTasks(); 
}
function edit(index) {
    editIndex = index;

    input.value = task[index];

    btn.style.display = "none";
    saveBtn.style.display = "inline-block";
}

function save() {
    task[editIndex] = input.value;
      
    localStorage.setItem("tasks", JSON.stringify(task));
           
    showTasks();

    input.value = "";

    btn.style.display = "inline-block";
    saveBtn.style.display = "none";

    editIndex = -1;
}
saveBtn.addEventListener("click",save)

deletebtn.addEventListener("click", clear);
btn.addEventListener("click", todo);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        todo();
    }
});