<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Blank"
};
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
