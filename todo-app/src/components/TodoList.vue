<template>
    <div class="todo-list">
        <todo-list-item v-for="todo in todos" :key=' todo.id ' :todo-item=" todo "
            @change-staet=" $event.target.checked "></todo-list-item>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
    name: 'TodoList',
    components: { TodoListItem },
    props: ['todos'],
};
</script>

<style>
.todo-list {
    display: grid;
    row-gap: 14px;
}
</style>