<template>
  <main>
    <div class="container">
      <h1>欢迎使用 Feng 待办事项！</h1>
      <TodoAdd :tid="todos.length" @add-todo="addTodo"></TodoAdd>
      <TodoFilter></TodoFilter>
      <TodoList :todos=" todos "></TodoList>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import TodoAdd from './components/TodoAdd.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoFilter,
    TodoList
  },
  setup() {
    const todos = ref([]);
    const addTodo = (todo) => todos.value.push(todo);
    return {
      todos,
      addTodo
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "pingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
