<template>
  <div class="field has-addons pb-5">
    <input
      class="control is-expanded"
      type="text"
      name="content"
      id="content"
      placeholder="e.g. make a video"
      v-model="input_content"
    />

    <button @click="addTodo" class="button is-small is-info">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>ADD TODO</span>
    </button>
  </div>

  <h2 class="subtitle is-family-monospace">PICK A CATEGORY</h2>
  <div class="field has-addons">
    <div class="control">
      <div class="select">
        <select v-model="input_category">
          <option>Select dropdown</option>
          <option v-for="category in categories" :key="category.category_name">
            {{ category.category_name }}
          </option>
        </select>
      </div>
    </div>

    <button
      @click="addingCategory = !addingCategory"
      class="button is-small is-info"
    >
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>NEW</span>
    </button>
  </div>

  <div v-if="addingCategory" class="field has-addons pb-5">
    <input
      type="text"
      name="content"
      id="content"
      placeholder="e.g. University"
      v-model="input_new_category"
    />

    <button @click="saveCategory" class="button is-small is-success">
      <span class="icon is-small">
        <i class="fas fa-floppy-disk"></i>
      </span>
      <span>SAVE</span>
    </button>

    <button @click="cancelCategory" class="button is-small is-danger">
      <span class="icon is-small">
        <i class="fas fa-xmark"></i>
      </span>
      <span>CANCEL</span>
    </button>
  </div>
</template>

<script setup>
import { useTodo } from "../composables/useTodo";
import { ref } from "vue";

const {
  addTodo,
  addCategory,
  input_category,
  input_content,
  input_new_category,
  categories,
} = useTodo();

const addingCategory = ref(true);

const saveCategory = () => {
  addingCategory.value = !addingCategory.value;
  addCategory();
};

const cancelCategory = () => {
  addingCategory.value = !addingCategory.value;
  input_new_category.value = "";
};
</script>

<style lang="css" scoped>
@import "bulma/css/bulma.css";
</style>
