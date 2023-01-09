<script setup>
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
import TodoGreeting from "../components/TodoGreeting.vue";
</script>

<template>
  <main class="container">
    <section class="section pb-1 pt-2">
      <TodoGreeting />
    </section>

    <section class="section pb-1">
      <TodoForm />
    </section>

    <section class="section">
      <TodoList />
    </section>
  </main>
</template>

<style scoped>
@import "bulma/css/bulma.css";
</style>
