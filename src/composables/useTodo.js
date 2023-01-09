import { storeToRefs } from "pinia";
import { onMounted, watch, ref } from "vue";
import { useTodoStore } from "../stores/todoStore";

export function useTodo() {
  // variables
  const { todos, todos_asc, categories } = storeToRefs(useTodoStore());
  const input_content = ref("");
  const input_category = ref(null);
  const input_new_category = ref("");
  // computed properties
  // watchers

  watch(
    todos,
    (newVal) => {
      localStorage.setItem("todos", JSON.stringify(newVal));
    },
    {
      deep: true,
    }
  );

  watch(
    categories,
    (newVal) => {
      localStorage.setItem("categories", JSON.stringify(newVal));
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

  const addCategory = () => {
    if (input_new_category.value.trim() === "") {
      return;
    }
    categories.value.push({
      category_name: input_new_category.value,
    });

    input_new_category.value = "";
    input_category.value = null;
  };

  const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo);
  };

  // life cycle hooks
  onMounted(() => {
    todos.value = JSON.parse(localStorage.getItem("todos")) || [];
    categories.value = JSON.parse(localStorage.getItem("categories")) || [];
  });

  return {
    addTodo,
    addCategory,
    input_category,
    input_content,
    removeTodo,
    todos_asc,
    todos,
    categories,
    input_new_category,
  };
}
