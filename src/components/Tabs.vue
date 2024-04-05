<template>
  <nav class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      class="tabs__item"
      :class="{
      'tabs__item--active': tab.value === currentTab,
      [tabClass]: true,
    }"
      @click="tabClick(tab.value)"
      :ref="tab.value"
      type="button"
    >
      <!-- @slot Use this slot for content -->
      <slot v-if="!!$slots[`title-${tab.value}`]" :name="`title-${tab.value}`"/>
      <span v-else class="tabs__item__title">{{ tab.title }}</span>
    </button>
    <div
      class="tabs__active-line"
      :style="{ width: `${activeLineWidth}px`, transform: `translateX(${activeLineOffset}px)` }"
    />
  </nav>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    /**
     * List of tabs titles
     * @param {String[]}
     */
    tabs: {
      type: Array,
      required: true
    },
    /**
     * Selected tab
     * @param {String}
     */
    currentTab: {
      type: String,
      required: true
    },
    /**
     * Tab Class
     * @param {String}
     */
    tabClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      activeLineWidth: 0,
      activeLineOffset: 0
    };
  },
  methods: {
    tabClick(tabValue) {
      if (tabValue === this.currentTab) {
        return;
      }
      this.$emit("update:current-tab", tabValue);
      this.$emit("change", tabValue);
    },
    moveActiveLine(newValue) {
      const element = this.$refs[newValue][0];
      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
    }
  },
  mounted() {
    this.moveActiveLine(this.currentTab);
  },
  watch: {
    currentTab(newValue) {
      if (newValue) {
        this.moveActiveLine(newValue);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  position: relative;
  border-bottom: 2px solid white;
  margin-bottom: 0.5rem;

  &__item {
    padding: 0 0.5rem 0.5rem;
    margin-right: 1rem;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: white;
    font-size: 1.5rem;

    &--active {
      color: var(--vt-c-brand);
    }

    &:hover {
      color: var(--vt-c-brand);
    }
  }

  &__active-line {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 8px;
    background-color: var(--vt-c-brand);
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
</style>
