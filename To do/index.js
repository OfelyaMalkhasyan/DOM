const input = document.querySelector(".container-input");
const submit = document.querySelector(".container-submit");
const deleteAll = document.querySelector(".container-delete_all");

submit.addEventListener("click", addToDo);

function addToDo(e) {
  e.preventDefault();

  let li = document.createElement("li");
  let val = document.querySelector("input").value;
  let text = document.createTextNode(val);
  let deleteButton = document.createElement("button");
  let checkedButton = document.createElement("button");
  let editButton = document.createElement("button");

  deleteButton.innerHTML = "Delete";
  checkedButton.innerHTML = "Done";
  editButton.innerHTML = "Edit";

  li.appendChild(text);
  li.appendChild(deleteButton);
  li.appendChild(checkedButton);
  li.appendChild(editButton);

  if (val === "") {
    alert("Please enter the text");
  } else {
    document.querySelector("ul").appendChild(li);
  }
  document.querySelector("input").value = "";

  deleteAll.addEventListener("click", deleteAllItems);
  deleteButton.addEventListener("click", deleteItem);
  checkedButton.addEventListener("click", checkItem);
  editButton.addEventListener("click", editItem);

  function deleteAllItems() {
    li.parentNode.removeChild(li);
  }

  function deleteItem() {
    li.parentNode.removeChild(li);
  }

  function checkItem() {
    li.classList.toggle("check");
  }

  function editItem() {
    text.textContent = prompt("Edit text");
  }
}
