<!-- eslint-disable -->
<template>
    <main>
        <h1>create todo</h1>
        <todoCreator @create-todo="createTodo" />
    </main>
    <ul class="todo-list" v-if="todoList.length > 0">
        <todoItem
            v-for="(todo, index) in todoList"
            :key="todo.id"
            :todo="todo"
            :index="index"
            @toggle-complete="toggleTodoComplete"
            @edit-todo="toggleEditTodo"
            @update-todo="updateTodo"
            @delete-todo="deleteTodo"
        />
    </ul>
    <p class="todos-msg" v-else>
        <Icon icon="noto-v1:sad-but-relieved-face" />
        <span>You have no todo's to complete! Add one!</span>
    </p>
    <p v-if="todoCompleted && todoList.length > 0" class="todos-msg">
        <Icon icon="noto-v1:party-popper" />
        <span>You Have Completed All Your Todos!</span>
    </p>
</template>
<!-- eslint-disable -->
<script setup>
import todoCreator from "@/components/todoCreator.vue";
import todoItem from "@/components/todoItem.vue";
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
const todoList = ref([]);

const todoCompleted = computed(() => {
    return todoList.value.every((todo) => todo.isCompleted);
});

const fetchTodoList = () => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodoList) {
        todoList.value = savedTodoList;
    }
};
fetchTodoList();

const setTodolistToLocalstorage = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList.value));
};

const createTodo = (todo) => {
    todoList.value.push({
        id: crypto.randomUUID(),
        todo,
        isCompleted: null,
        isEditing: null,
    });

    setTodolistToLocalstorage();
};
const toggleTodoComplete = (todoPos) => {
    todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted;
    setTodolistToLocalstorage();
};
const toggleEditTodo = (todoPos) => {
    todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing;
};
const updateTodo = (todoVal, todoPos) => {
    todoList.value[todoPos].todo = todoVal;
};
const deleteTodo = (todoId) => {
    todoList.value = todoList.value.filter((todo) => todo.id !== todoId);
};
</script>
<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 16px;

    h1 {
        margin-bottom: 16px;
        text-align: center;
    }
}
.todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
    padding-left: 0;
}

.todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
}
</style>
