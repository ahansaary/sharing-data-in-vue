import { filters } from '../services/filters'
import { todoStorage } from '../services/storage'

const TodosMixin = {
  data() {
    return {
      todos: todoStorage.fetch(),
      visibility: 'all'
    }
  },

  computed: {
    remaining: function() {
      return filters.active(this.todos).length
    }
  }
}

export default TodosMixin
