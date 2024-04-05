<template>
  <component :is="componentLoader">
    <slot />
  </component>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: "layout",
  computed: {
    componentLoader() {
      const path = "./";
      const component = (this.$route && this.$route.meta.layout) || "LayoutBlank";
      return defineAsyncComponent(() => import( 
        /* @vite-ignore */
        `${path}${component}.vue`
      ));
    },
  },
};
</script>
