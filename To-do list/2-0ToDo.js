const toDoList = [
  {
    name:"Study",
    dueDate:"2023-11-15"
  },
  {
    name:"Go to class",
    dueDate:"2023-11-16"
  }
]
renderToDo();
function renderToDo(){
  let toDoHtml = ""
  toDoList.forEach((toDoObj) => {
      const { name, dueDate } = toDoObj;
      const html = `
      <div class= "div">
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button class = "js-delete delete">Delete</button>
      </div>
      `
       toDoHtml += html;
      // root.innerHTML = toDoHtml
    });

   document.querySelector(".root").innerHTML = toDoHtml

    document.querySelectorAll('.js-delete')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        toDoList.splice(index, 1)
        renderToDo()
      } );
    } );
}

document.querySelector('.js-add').addEventListener('click', () => {
  addToDo();
})

function addToDo(){
  let input = document.querySelector('#js-input');
  let name = input.value;
  let dueDate = document.querySelector('#js-date').value;
  toDoList.push({
      name,
      dueDate
    })
    input.value = null
    
    renderToDo()
}