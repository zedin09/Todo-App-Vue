<template>
  <div class="field">
    <input
      class="is-checkradio has-background-color"
      id="exampleCheckboxBackgroundColorDefault"
      type="checkbox"
      name="exampleCheckboxBackgroundColorDefault"
      checked="checked"
    />
    <label for="exampleCheckboxBackgroundColorDefault">Checkbox</label>
  </div>

  <div class="field">
    <input
      class="is-checkradio has-background-color is-success"
      id="exampleCheckboxBackgroundColorSuccess"
      type="checkbox"
      name="exampleCheckboxBackgroundColorSuccess"
      checked="checked"
    />
    <label for="exampleCheckboxBackgroundColorSuccess"
      >Checkbox - success</label
    >
  </div>

  <div class="field">
    <input
      class="is-checkradio has-background-color is-warning"
      id="exampleCheckboxBackgroundColorWarning"
      type="checkbox"
      name="exampleCheckboxBackgroundColorWarning"
      checked="checked"
    />
    <label for="exampleCheckboxBackgroundColorWarning"
      >Checkbox - warning</label
    >
  </div>

  <div class="field">
    <input
      class="is-checkradio has-background-color is-danger"
      id="exampleCheckboxBackgroundColorDanger"
      type="checkbox"
      name="exampleCheckboxBackgroundColorDanger"
      checked="checked"
    />
    <label for="exampleCheckboxBackgroundColorDanger">Checkbox - danger</label>
  </div>

  <div class="field">
    <input
      class="is-checkradio has-background-color is-info"
      id="exampleCheckboxBackgroundColorInfo"
      type="checkbox"
      name="exampleCheckboxBackgroundColorInfo"
      checked="checked"
    />
    <label for="exampleCheckboxBackgroundColorInfo">Checkbox - info</label>
  </div>

  <div class="bd-notification is-dark">
    <div class="field">
      <input
        class="is-checkradio has-background-color is-white"
        id="exampleCheckboxBackgroundColorWhite"
        type="checkbox"
        name="exampleCheckboxBackgroundColorWhite"
        checked="checked"
      />
      <label for="exampleCheckboxBackgroundColorWhite">Checkbox - white</label>

      <input
        class="is-checkradio has-background-color is-white"
        id="exampleCheckboxBackgroundColorWhite2"
        type="checkbox"
        name="exampleCheckboxBackgroundColorWhite2"
      />
      <label for="exampleCheckboxBackgroundColorWhite2">Checkbox - white</label>
    </div>
  </div>
</template>

<script setup>
//import { useTodo } from "../composables/useTodo";

//const { categories } = useTodo();
</script>

<style lang="css" scoped>
@import "bulma/css/bulma.css";
</style>
