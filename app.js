let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

if (localStorage.getItem('list') === null)
{
  let todoItems = [];
  localStorage.setItem('list', JSON.stringify(todoItems));
  window.location.reload();
} else if (localStorage.getItem('list') !== null) {
  let todoItems = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; todoItems.length > i; i++) {
    let li = document.createElement('li');
    let button = document.createElement('button');

    li.innerHTML = todoItems[i];
    button.innerHTML = '削除';
    button.type = 'button';
    li.classList.add('list-item');
    button.classList.add('delete-button');
    button.onclick = function() {
      dele(i);
    }

    li.appendChild(button);
    todoList.appendChild(li);
  }
}
let todoItems = JSON.parse(localStorage.getItem('list'));
todoInput.addEventListener('keydown', function(e) {
  let text = todoInput.value.trim();

  if (e.key !== 'Enter' || text === '') {
    return;

  } else if (e.key === 'Enter' || text !== '') {
    todoItems.push(text);
    localStorage.setItem('list', JSON.stringify(todoItems));
    todoInput.value = '';
    window.location.reload();
  }
});

function dele(index) {
  todoItems.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(todoItems));
  window.location.reload();
}