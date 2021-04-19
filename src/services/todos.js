import { BehaviorSubject } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { filters } from './filters'
import { todoStorage } from './storage'

const todosSubject = new BehaviorSubject(todoStorage.fetch())
const visibilitySubject = new BehaviorSubject('all')

todosSubject.pipe(tap(todos => todoStorage.save(todos))).subscribe()

export const todosService = {
  todos$: todosSubject.asObservable(),
  visibility$: visibilitySubject.asObservable(),
  remaining$: todosSubject.pipe(map(todos => filters.active(todos).length)),

  setVisibility(value) {
    visibilitySubject.next(value)
  },

  addTodo(value) {
    todosSubject.next([
      ...todosSubject.value,
      {
        id: todoStorage.uid++,
        title: value,
        completed: false
      }
    ])
  },

  markAllAsCompleted(value) {
    const todos = todosSubject.value
    const newTodos = todos.map(todo => ({
      ...todo,
      completed: value
    }))
    todosSubject.next(newTodos)
  },

  removeCompleted() {
    todosSubject.next(filters.active(todosSubject.value))
  },

  removeTodo(index) {
    const todos = todosSubject.value
    const newTodos = todos.filter((_, i) => i !== index)
    todosSubject.next(newTodos)
  }
}
