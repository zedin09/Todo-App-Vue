<template>
  <h2 class="subtitle is-family-monospace">THIS IS YOUR TODO LIST</h2>
  <div v-for="todo in todos_asc" :key="todo.createdAt" class="field has-addons">
    <div class="tag is-success is-size-5">
      <span class="is-size-7">
        {{ todo.category.toLocaleUpperCase() }}
      </span>
    </div>

    <input
      class="control is-expanded"
      id="todoInput"
      type="text"
      v-model="todo.content"
      disabled
    />

    <button class="button is-small is-danger" @click="removeTodo(todo)">
      <span class="icon is-small">
        <i class="fas fa-trash"></i>
      </span>
      <span>DELETE</span>
    </button>

    <button class="button is-small is-link" @click="editTodo" v-if="!editing">
      <span class="icon is-small">
        <i class="fas fa-pen"></i>
      </span>
      <span>EDIT</span>
    </button>

    <button class="button is-small is-success" @click="editTodo" v-else>
      <span class="icon is-small">
        <i class="fas fa-floppy-disk"></i>
      </span>
      <span>SAVE</span>
    </button>
  </div>
</template>

<script setup>
import { useTodo } from "../composables/useTodo";
import { ref } from "vue";

const { removeTodo, todos_asc } = useTodo();
const editing = ref(false);

const editTodo = () => {
  let element = document.getElementById("todoInput");
  let disabled = element.getAttribute("disabled");

  if (disabled) {
    element.removeAttribute("disabled");
    editing.value = true;
  } else {
    element.setAttribute("disabled", "disabled");
    editing.value = false;
  }
};
</script>

<style lang="css" scoped>
@import "bulma/css/bulma.css";
</style>
