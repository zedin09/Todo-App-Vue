<script setup>
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
import TodoGreeting from "../components/TodoGreeting.vue";
</script>

<template>
  <main class="app">
    <section class="section">
      <h3 class="subtitle">TODO Greeting</h3>
      <TodoGreeting />
    </section>

    <section class="section">
      <h3 class="subtitle">CREATE A TODO</h3>
      <TodoForm />
    </section>

    <section class="section">
      <h3 class="subtitle">TODO LIST</h3>
      <TodoList />
    </section>
  </main>
</template>

<style scoped>
@import "bulma/css/bulma.css";
</style>
