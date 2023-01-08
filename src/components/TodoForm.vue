<template>
  <form id="new-todo-form" @submit.prevent="addTodo">
    <h4>What's on your todo list?</h4>
    <input
      type="text"
      name="content"
      id="content"
      placeholder="e.g. make a video"
      v-model="input_content"
    />

    <h4>Pick a category</h4>
    <div class="options">
      <label>
        <input
          type="radio"
          name="category"
          id="category1"
          value="business"
          v-model="input_category"
        />
        <span class="bubble business"></span>
        <div>Business</div>
      </label>

      <label>
        <input
          type="radio"
          name="category"
          id="category2"
          value="personal"
          v-model="input_category"
        />
        <span class="bubble personal"></span>
        <div>Personal</div>
      </label>
    </div>

    <input type="submit" value="Add todo" />
  </form>
</template>

<script setup>
import { useTodo } from "../composables/useTodo";

const { addTodo, input_category, input_content } = useTodo();
</script>

<style lang="scss" scoped></style>
