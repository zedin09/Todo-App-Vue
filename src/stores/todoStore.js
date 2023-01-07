import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoList", () => {
  // state
  const todos = ref([]);
  const name = ref("");

  // getters
  const todos_asc = computed(() =>
    todos.value.sort((a, b) => {
      return a.createdAt - b.createdAt;
    })
  );

  return { todos, todos_asc, name };
});
