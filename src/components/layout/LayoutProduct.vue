<template>
  <div>
    <router-link :to="'/'">Back to home</router-link>
    <h1>Product - My moutain products</h1>
    <slot />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
h1 {
  margin: 2rem 0 2rem 0;
}
</style>