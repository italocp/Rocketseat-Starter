let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

let todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
  listElement.innerHTML = ''
  for (todo of todos) {
    let todoElement = document.createElement('li')
    let todoText = document.createTextNode(todo)

    let pos = todos.indexOf(todo)
    todoElement.setAttribute('onclick', `deletTodo(${pos})`)

    let delet = document.createElement('a')
    delet.setAttribute('href','#')

    let deletTxt = document.createTextNode('Excluir')
    
    todoElement.appendChild(todoText)
    listElement.appendChild(todoElement)
    todoElement.appendChild(delet)
    delet.appendChild(deletTxt)
  }
}

renderTodos();


function add() {
  let inputText = inputElement.value
  todos.push(inputText)
  inputElement.value = ''
  inputElement.focus()
 
  renderTodos()
  saveToStorage()
}

buttonElement.onclick = add

function deletTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
  saveToStorage()
}

function saveToStorage() {

  localStorage.setItem('list_todos', JSON.stringify(todos))
}