<template>
  <h1>{{ msg||'颜色变量' }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      color: "red",
      opacity: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.opacity >= 1 && (this.opacity = 0);
      this.opacity += 0.2;
    }, 680);
  },
};
</script>

<style scoped vars="{color,opacity}">
h1 {
  color: var(--color);
  opacity: var(--opacity);
}
</style>
