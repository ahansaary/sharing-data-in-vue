import { action, computed, observable, reaction } from 'mobx'
import { filters } from '../services/filters'
import { todoStorage } from '../services/storage'
import Todo from './todo'

export default class TodoList {
  @observable todos = todoStorage.fetch()
  @observable visibility = 'all'

  @computed
  get remaining() {
    return filters.active(this.todos).length
  }

  @computed
  get filteredTodos() {
    return filters[this.visibility](this.todos)
  }

  @action
  addTodo(title) {
    this.todos = [...this.todos, new Todo(title)]
  }

  @action
  removeCompleted() {
    this.todos = filters.active(this.todos)
  }

  @action
  removeTodo(index) {
    this.todos = this.todos.filter((_, i) => i !== index)
  }
}

export const store = new TodoList()

reaction(
  () => store.todos,
  todos => {
    todoStorage.save(todos)
  }
)
