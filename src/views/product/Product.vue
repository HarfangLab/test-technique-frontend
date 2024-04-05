<template>
  <div>
    <tabs
      v-model:current-tab="currentTab"
      :tabs="tabs"
      class="tabs"
      @change="currentTabChange"
    ></tabs>
    <router-view :key="this.$route.path" />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Product",
  components: {
    Tabs,
  },
  data() {
    return {
      tabDisplayed: null,
      currentTab: null,
    };
  },
  computed: {
    tabs() {
      return [
        {
          title: "Ski",
          value: "ski",
        },
        {
          title: "Snowboard",
          value: "snowboard",
        },
        {
          title: "Sledge",
          value: "sledge",
        },
      ];
    },
    tabsValue() {
      return this.tabs.map(({ value }) => value);
    },
  },
  methods: {
    currentTabChange() {
      this.$router.push({ name: `product-${this.currentTab}` });
    },
  },
  watch: {
    $route: {
      handler(to) {
        const initialTab = to.name.replace(/product-/, "");
        if (
          initialTab &&
          initialTab !== this.currentTab &&
          this.tabs.includes(initialTab)
        ) {
          this.currentTab = initialTab;
        }
      },
      immediate: true,
    },
  },
  created() {
    if (!this.currentTab) {
      const value = this.$route.name.replace(/product-/, "");
      this.currentTab = value;
    }
  },
};
</script>

<style lang="scss" scoped>

.tabs {
  margin-bottom: 2rem;
}
</style>
