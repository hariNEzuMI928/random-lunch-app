<template>
  <div class="page">
    <label>
      <h2>TODO</h2>
      <input type="text" v-model="todo.name" />
    </label>
    <button type="button" @click="createTodo">作成</button>

    <hr />
    <div>
      <button type="button" @click="showTodoType = 'all'">すべて</button> |
      <button type="button" @click="showTodoType = 'active'">未完了</button> |
      <button type="button" @click="showTodoType = 'complete'">完了</button>
    </div>

    <ul>
      <li v-for="(todo, key) in filteredTodos" :key="key">
        {{ todo.name }}
        <input
          type="checkbox"
          v-model="todo.isComplete"
          v-on:click="updateTodo(todo, key)"
        />
        <button type="button" @click="deleteTodo(key)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Todo',
  data() {
    return {
      todo: {
        name: '',
        isComplete: '',
      },
      showTodoType: 'all',
      todos: [],
    };
  },
  created: function () {
    this.database = firebase.database();
    this.ref = this.database.ref('todos');
  },
  mounted() {
    this.ref.on('value', (snapshot) => (this.todos = snapshot.val()));
  },
  computed: {
    filteredTodos: function () {
      var filterTodos = {};
      if (this.showTodoType == 'all') {
        filterTodos = this.todos;
      } else {
        var showIsComplete = false;
        if (this.showTodoType == 'complete') {
          showIsComplete = true;
        }
        this.ref
          .orderByChild('isComplete')
          .equalTo(showIsComplete)
          .once('value', (snapshot) => (filterTodos = snapshot.val()));
      }
      return filterTodos;
    },
  },
  methods: {
    createTodo() {
      this.ref
        .push({
          name: this.todo.name,
          isComplete: false,
        })
        .then(() => {
          this.todo.name = '';
        });
    },
    updateTodo: function (todo, key) {
      todo.isComplete = !todo.isComplete;
      var updates = {};
      updates[key] = todo;
      this.ref.update(updates);
    },
    deleteTodo: function (key) {
      this.ref.child(key).remove();
    },
  },
};
</script>
