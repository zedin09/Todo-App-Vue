<template>
  <div class="list" id="todo-list">
    <div
      v-for="todo in todos_asc"
      :key="todo.createdAt"
      :class="`todo-item ${todo.done && 'done'}`"
    >
      <label>
        <input type="checkbox" v-model="todo.done" />
        <span
          :class="`bubble ${
            todo.category == 'business' ? 'business' : 'personal'
          }`"
        ></span>
      </label>

      <div class="todo-content">
        <input type="text" v-model="todo.content" />
      </div>

      <div class="actions">
        <button class="delete" @click="removeTodo(todo)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodo } from "../composables/useTodo";

const { removeTodo, todos_asc } = useTodo();
</script>

<style lang="scss" scoped></style>
