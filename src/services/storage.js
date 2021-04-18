// localStorage.clear();

const presetValues = [
  {
    title: 'Wake up at 5am',
    completed: true
  },
  {
    title: 'Learn how to use Vue.js',
    completed: false
  },
  {
    title: 'Drink coffee',
    completed: false
  }
]

// Use localStorage
const STORAGE_KEY = 'todo-app'

export const todoStorage = {
  fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || presetValues
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },

  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
