import { storeToRefs } from "pinia";
import { onMounted, watch, ref } from "vue";
import { useTodoStore } from "../stores/todoStore";

export function useTodo() {
  // variables
  const { todos, todos_asc, name } = storeToRefs(useTodoStore());
  const input_content = ref("");
  const input_category = ref(null);
  // computed properties
  // watchers
  watch(name, (newVal) => {
    localStorage.setItem("name", newVal);
  });

  watch(
    todos,
    (newVal) => {
      localStorage.setItem("todos", JSON.stringify(newVal));
    },
    {
      deep: true,
    }
  );
  // methods
  const addTodo = () => {
    if (input_content.value.trim() === "" || input_category.value === null) {
      return;
    }
    todos.value.push({
      content: input_content.value,
      category: input_category.value,
      done: false,
      editable: false,
      createdAt: new Date().getTime(),
    });

    input_content.value = "";
    input_category.value = null;
  };

  const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo);
  };

  // life cycle hooks
  onMounted(() => {
    name.value = localStorage.getItem("name") || "";
    todos.value = JSON.parse(localStorage.getItem("todos")) || [];
  });

  return {
    addTodo,
    input_category,
    input_content,
    name,
    removeTodo,
    todos_asc,
    todos,
  };
}
