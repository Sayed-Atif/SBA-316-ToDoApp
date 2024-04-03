// JS File for To Do List APP

const body = document.querySelector("body");   // body is the parent
const headerElement = document.createElement("header");  // create the header element
headerElement.classList.add("header");  // add the class to the header
body.appendChild(headerElement);    // append the header to the body
headerElement.textContent = "SBA 316: The Document Object Model";    // add the text to the header
headerElement.style.fontSize = "20px";
headerElement.style.fontWeight = "bold";
headerElement.style.color = "black";


//target the form element and create the h1 element
const formElement = document.querySelector(".form"); 
const titleElement = document.querySelector(".title");
const h1Element = document.createElement("h1");
h1Element.setAttribute("class", "title");
formElement.prepend(h1Element);  
h1Element.textContent = "To Do List App";
h1Element.style.textDecoration = "cover";
h1Element.style.textShadow = "1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue";


const inputElement = document.querySelector(".input"); // target the input element
// avoid input field from adding tasks to the list by pressing enter key.
inputElement.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }else if (event.key === "myBtn") {
    toDoList();
  }
})

// input field validation function to check if the input field is empty or not.
function checkInput() {
  if (inputElement.value === "") {
    alert("Please enter a task");
    return false;
  } else {
    return true;
  }
}
 checkInput();


function updateLocalStorage() {
  const list = document.querySelectorAll("li");
  const tasks = [];
  list.forEach((li) => {
    tasks.push({
      name: li.innerText,
      checked: li.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(tasks));
}

inputElement.addEventListener("keyup", (event) => {
  if (event.key === "myBtn") {
    toDoList();
  }
});


const ulElement = document.querySelector(".list"); // target the ul element

let list = JSON.parse(localStorage.getItem("list")); // get the list from local storage
if (list) {         
  list.forEach((task) => {
    toDoList(task);
  }); 
}

formElement.addEventListener("submit", (event) => {  // event listener to add task
  event.preventDefault(); // prevent the form from refreshing the page
  toDoList();  // call the function to create the list
  updateLocalStorage(); // call the function to update local storage
});


function toDoList(task) {   // Function to create list
  let newTask = inputElement.value;
  if (task) {    
    newTask = task.name;
  }

  const  liElement= document.createElement("li");  // creating list item element
  if (task && task.checked) {            // to keep the task checked if it was checked before after refreshing
    liElement.classList.add("checked");
  }
  liElement.innerText =newTask;
  ulElement.appendChild(liElement);                 // append the list item to the list
  inputElement.value = "";                         // clear the input field


  const checkBtnElement = document.createElement("div"); // creating check button
  checkBtnElement.innerHTML = `<i class="fas fa-check-square"></i>`;
  liElement.appendChild(checkBtnElement);


  const deleteBtnElement = document.createElement("div"); // creating delete button
  deleteBtnElement.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  liElement.appendChild(deleteBtnElement);


  checkBtnElement.addEventListener("click", () => {  // event listener to check task
    liElement.classList.toggle("checked");  //
    updateLocalStorage();
  })


  deleteBtnElement.addEventListener("click", () => {  // event listener to delete task
    liElement.remove();
    updateLocalStorage();
  })
}


function updateLocalStorage() {                        // function to update local storage
  const allLiElements = document.querySelectorAll("li");
  list = [];
  allLiElements.forEach((liElement) => {
    list.push({
      name: liElement.innerText,
      checked: liElement.classList.contains("checked"),    // check if the list item is checked, classList contains is used to check if the class "checked" exists in the list item.
    });
  });
  localStorage.setItem("list", JSON.stringify(list));   // store the list in local storage, stringify is used to convert the list to a string
}


// to create a button element and append it to the body
const myForm = document.querySelector(".form");
const myBtn = document.createElement("button");
myBtn.setAttribute("id", "submit");
myBtn.textContent = "Add Task";
myForm.appendChild(myBtn);










