<template>
   <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h3>Choose a product</h3>

      <nav>
        <router-link :to="{name: 'product-ski'}">My skis</router-link>
        <router-link :to="{name: 'product-snowboard'}">My snowboards</router-link>
        <router-link :to="{name: 'product-sledge'}">My sledges</router-link>
      </nav>
    </div>
  </header>
</template>


<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: 500px
  }

  .logo {
    margin: 0 2rem 0 0;
    transform: rotate(180deg);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
   
    & > * {
      display: block;
    }
  }
}
</style>
