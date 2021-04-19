import { observable } from 'mobx'
import { todoStorage } from '../services/storage'

export default class Todo {
  id = todoStorage.uid++

  @observable title
  @observable completed = false

  constructor(title) {
    this.title = title
  }
}
