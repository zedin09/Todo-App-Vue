<template>
  <div>
    <section class="greeting">
      <h2 class="title">
        What's up,
        <input type="text" id="name" placeholder="Name here" v-model="name" />
      </h2>
    </section>
  </div>
</template>

<script setup>
import { useTodo } from "../composables/useTodo";

const { name } = useTodo();
</script>

<style lang="scss" scoped></style>
