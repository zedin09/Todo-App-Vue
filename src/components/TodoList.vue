<template>
  <h2 class="subtitle is-family-monospace">THIS IS YOUR TODO LIST</h2>
  <div v-for="(todo, index) in todos_asc" :key="todo.createdAt" class="columns">
    <div class="column is-10">
      <div class="field has-addons">
        <div class="tag is-success is-size-6">
          <span class="is-size-7">
            {{ todo.category.toLocaleUpperCase() }}
          </span>
        </div>

        <input
          class="input is-small"
          :id="`todoInput${index}`"
          type="text"
          v-model="todo.content"
          disabled
        />
      </div>
    </div>

    <div class="column is-2">
      <div class="field has-addons">
        <button class="button is-small is-danger" @click="removeTodo(todo)">
          <span class="icon is-small">
            <i class="fas fa-trash"></i>
          </span>
          <span>DELETE</span>
        </button>

        <button
          class="button is-small is-link"
          @click="editTodo(index, todo)"
          v-if="!todo.editable"
        >
          <span class="icon is-small">
            <i class="fas fa-pen"></i>
          </span>
          <span>EDIT</span>
        </button>

        <button
          class="button is-small is-success"
          @click="editTodo(index, todo)"
          v-else
        >
          <span class="icon is-small">
            <i class="fas fa-floppy-disk"></i>
          </span>
          <span>SAVE</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodo } from "../composables/useTodo";

const { removeTodo, todos_asc } = useTodo();

const editTodo = (index, todo) => {
  todo.editable = !todo.editable;
  let element = document.getElementById(`todoInput${index}`);

  if (todo.editable) {
    element.removeAttribute("disabled");
  } else {
    element.setAttribute("disabled", "disabled");
  }
};
</script>

<style lang="css" scoped></style>
